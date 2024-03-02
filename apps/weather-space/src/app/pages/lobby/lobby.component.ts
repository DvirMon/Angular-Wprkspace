import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Signal, computed, inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AutocompleteComponent } from '../../features/weather-autocomplete/autocomplete.component';
import {
  SelectChangeEvent,
  UnitChangeEvent,
  WeatherResultComponent,
} from '../../features/weather-result-card/weather-result.component';
import { HighLightPipe } from '../../shared/pipes/high-light.pipe';
import { PluckPipe } from '../../shared/pipes/pluck.pipe';
import { SignalSore } from '../../store/store';
import { AutocompleteOption } from '../../shared/models/autocomplete-result';
import { WeatherResult } from '../../shared/models/weather-result';

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
  #store = inject(SignalSore);

  options: Signal<AutocompleteOption[]>;
  currentSelection: Signal<AutocompleteOption>;
  control!: Signal<FormControl<AutocompleteOption>>;

  metric: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nfb: NonNullableFormBuilder
  ) {
    this.options = this.#store.optionsEntities;
    this.currentSelection = this.#store.currentSelection;
    this.control = computed(() => this.nfb.control(this.currentSelection()));
  }

  ngOnInit(): void {
    this.#store.loadQuery(this.#store.searchTerm);
  }

  onQueryChange(query: string): void {
    // this.queryChangeSource$.next(query);
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    // const option: AutocompleteOption = event.option.value;
    // this.selectedOptionSource$.next(option);
    // this.queryChangeSource$.next(option.value.LocalizedName);
    // this.updateQuery(option.value);
  }

  onSelectChange({ selected, source }: SelectChangeEvent): void {}

  onUnitTempChange({ metric }: UnitChangeEvent): void {}

  displayFn(option: AutocompleteOption): string {
    return option
      ? `${option.LocalizedName}, ${option.Country.LocalizedName}`
      : '';
  }
}
