import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Signal, computed, inject } from '@angular/core';
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
import {
  FavoriteChangeEvent,
  UnitChangeEvent,
  WeatherResultComponent,
} from '../../features/weather-result-card/weather-result.component';
import { AutocompleteOption } from '../../shared/models/autocomplete-result';
import { CurrentWeather } from '../../shared/models/current-weather-result';
import { FutureWeather } from '../../shared/models/future-weather-result';
import { HighLightPipe } from '../../shared/pipes/high-light.pipe';
import { PluckPipe } from '../../shared/pipes/pluck.pipe';
import { Store } from '../../store/store-options';
import { WeatherStore } from '../../store/store-weather';
import { FavoriteStore } from '../../store/store-favorites';
import { FavoriteEntity } from '../../features/weather-favorite-card/favorite-card.component';

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

  #store = inject(Store);
  #weatherStore = inject(WeatherStore);
  #favoriteStore = inject(FavoriteStore);

  options: Signal<AutocompleteOption[]>;
  optionSelected: Signal<AutocompleteOption>;
  control!: Signal<FormControl<AutocompleteOption>>;

  isMetric: Signal<boolean>;
  isFavorite: Signal<boolean>;
  currentWeather: Signal<CurrentWeather>;
  futureWeather: Signal<FutureWeather>;

  constructor() {
    this.options = this.#store.entities;
    this.optionSelected = this.#store.optionSelected;
    this.control = computed(() => this.#nfb.control(this.optionSelected()));

    this.currentWeather = computed(
      () => this.#weatherStore.currentEntityMap()[this.#weatherStore.selectId()]
    );

    this.futureWeather = computed(
      () => this.#weatherStore.futureEntityMap()[this.#weatherStore.selectId()]
    );
    this.isMetric = this.#weatherStore.isMetric;

    this.isFavorite = computed(
      () => !!this.#favoriteStore.entityMap()[this.#weatherStore.selectId()]
    );
  }

  ngOnInit(): void {
    this.#weatherStore.updateSelectId(this.#store.optionSelected());
  }

  // onQueryChange(query: string): void {}

  onOptionSelected(option: AutocompleteOption): void {
    this.#weatherStore.updateSelectId(option);
  }

  onFavoriteChanged(event: FavoriteChangeEvent): void {
    const { selected } = event;

    const favorite: FavoriteEntity = {
      ...event,
    } as FavoriteEntity;

    if (selected) {
      this.#favoriteStore.addFavorite(event);
    } else {
      this.#favoriteStore.removeFavorite(event);
    }
  }

  onUnitTempChange({ metric }: UnitChangeEvent): void {
    this.#weatherStore.updateIsMetric(metric);
  }

  displayFn(option: AutocompleteOption): string {
    return option
      ? `${option.LocalizedName}, ${option.Country.LocalizedName}`
      : '';
  }
}
