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
  UnitChangeEvent,
  WeatherResultComponent
} from '../../features/weather-result-card/weather-result.component';
import { AutocompleteOption } from '../../shared/models/autocomplete-result';
import { CurrentWeather } from '../../shared/models/current-weather-result';
import { FutureWeather } from '../../shared/models/future-weather-result';
import { HighLightPipe } from '../../shared/pipes/high-light.pipe';
import { PluckPipe } from '../../shared/pipes/pluck.pipe';
import { Store } from '../../store/store';

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
  
  #store = inject(Store);
  #nfb = inject(NonNullableFormBuilder);

  options: Signal<AutocompleteOption[]>;
  optionSelected: Signal<AutocompleteOption>;
  control!: Signal<FormControl<AutocompleteOption>>;

  metric = true;
  currentWeather: Signal<CurrentWeather>;
  futureWeather: Signal<FutureWeather>;

  constructor() {
    this.options = this.#store.optionsEntities;
    this.optionSelected = this.#store.optionSelected;
    this.control = computed(() => this.#nfb.control(this.optionSelected()));
    this.currentWeather = this.#store.currentWeather;
    this.futureWeather = this.#store.futureWeather;
  }

  ngOnInit(): void {
    this.#store.updateSelectId(this.#store.optionSelected());
  }

  // onQueryChange(query: string): void {}

  onOptionSelected(option: AutocompleteOption): void {
    this.#store.updateSelectId(option);
  }

  // onSelectChange({ selected, source }: SelectChangeEvent): void {}

  onUnitTempChange({ metric }: UnitChangeEvent): void {
    this.#store.updateIsMetric(metric);
  }

  displayFn(option: AutocompleteOption): string {
    return option
      ? `${option.LocalizedName}, ${option.Country.LocalizedName}`
      : '';
  }
}
