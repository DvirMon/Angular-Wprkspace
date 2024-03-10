import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AutocompleteComponent } from '../../features/weather-autocomplete/autocomplete.component';
import { FavoriteEntity } from '../../features/weather-favorite-card/favorite-card.component';
import {
  FavoriteChangeEvent,
  UnitChangeEvent,
  WeatherResultComponent,
} from '../../features/weather-result-card/weather-result.component';
import { AutocompleteOption } from '../../shared/models/autocomplete-result';
import { CurrentWeather } from '../../shared/models/current-weather-result';
import {
  FutureWeather,
  FutureWeatherArgs,
} from '../../shared/models/future-weather-result';
import { HighLightPipe } from '../../shared/pipes/high-light.pipe';
import { PluckPipe } from '../../shared/pipes/pluck.pipe';
import { FavoriteStore } from '../../store/store-favorites';
import { OptionsStore } from '../../store/store-options';
import { WeatherStore } from '../../store/store-weather';

@Component({
  selector: 'weather-space-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor,
    MatOption,
    NgIf,
    JsonPipe,
    AsyncPipe,
    PluckPipe,
    MatFormField,
    MatLabel,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    HighLightPipe,
    WeatherResultComponent,
    AutocompleteComponent,
  ],
})
export class LobbyComponent implements OnInit {
  #nfb = inject(NonNullableFormBuilder);

  #optionsStore = inject(OptionsStore);
  #weatherStore = inject(WeatherStore);
  #favoriteStore = inject(FavoriteStore);

  options: Signal<AutocompleteOption[]>;
  filtered: Signal<AutocompleteOption[]>;
  optionSelected: Signal<AutocompleteOption>;
  control!: FormControl<AutocompleteOption>;

  currentWeather: Signal<CurrentWeather>;
  futureWeather: Signal<FutureWeather>;

  isMetric: Signal<boolean>;
  isFavorite: Signal<boolean>;
  futureArgs: Signal<FutureWeatherArgs>;

  isWeatherData: Signal<boolean>;

  searchTerm: WritableSignal<string> = signal('tel aviv');

  constructor() {
    this.options = this.#optionsStore.entities;

    this.optionSelected = this.#optionsStore.optionSelected;

    this.isMetric = this.#weatherStore.isMetric;

    this.filtered = computed(() =>
      this.options().filter((option) => this.predicate(option))
    );

    this.currentWeather = computed(
      () =>
        this.#weatherStore.currentEntityMap()[this.#optionsStore.selectedId()]
    );

    this.futureArgs = computed<FutureWeatherArgs>(() => {
      return {
        id: this.#optionsStore.selectedId(),
        metric: this.#weatherStore.isMetric(),
      } as FutureWeatherArgs;
    });

    this.futureWeather = computed(
      () =>
        this.#weatherStore.futureEntityMap()[this.#optionsStore.selectedId()]
    );

    this.isWeatherData = computed(
      () =>
        !!this.currentWeather() &&
        !!this.optionSelected() &&
        !!this.futureWeather()
    );

    this.isFavorite = computed(
      () => !!this.#favoriteStore.entityMap()[this.#optionsStore.selectedId()]
    );

    effect(() => {
      this.#optionsStore.loadOptions(this.searchTerm());
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.options().length == 0) {
      await this.#optionsStore.loadOptionAsync(this.searchTerm());
    }

    if (this.#optionsStore.selectedId() == -1) {
      this.#optionsStore.setCurrentId(this.searchTerm());
    }

    this.control = this.#nfb.control(this.optionSelected());

    this.#weatherStore.loadCurrentWeather(this.#optionsStore.selectedId);
    this.#weatherStore.loadFutureWeather(this.futureArgs);
  }

  onOptionSelected(option: AutocompleteOption): void {
    this.#optionsStore.updateCurrentId(option.id);
  }

  onFavoriteChanged(event: FavoriteChangeEvent): void {
    const { selected } = event;

    console.log(event);

    const favorite: FavoriteEntity = {
      ...event,
    } as FavoriteEntity;

    if (selected) {
      this.#favoriteStore.addFavorite(favorite);
    } else {
      this.#favoriteStore.removeFavorite(favorite);
    }
  }

  onUnitTempChange({ metric }: UnitChangeEvent): void {
    this.#weatherStore.updateIsMetric(metric);
  }

  onQueryChanged(event: string) {
    this.searchTerm.update(() => event);
  }

  displayFn(value: AutocompleteOption): string {
    const option = value instanceof MatOption ? value.value : value;

    return option != null
      ? `${option.LocalizedName}, ${option.Country.LocalizedName}`
      : '';
  }

  predicate(option: AutocompleteOption) {
    return option.LocalizedName.toLowerCase().includes(
      this.searchTerm().toLowerCase()
    );
  }
}
