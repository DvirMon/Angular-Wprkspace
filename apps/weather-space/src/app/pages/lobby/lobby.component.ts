import { AsyncPipe, JsonPipe, NgFor, NgIf } from "@angular/common";
import { Component, OnInit, Signal, computed, inject } from "@angular/core";
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from "@angular/material/autocomplete";
import { MatOption } from "@angular/material/core";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { AutocompleteComponent } from "../../features/weather-autocomplete/autocomplete.component";
import { SelectChangeEvent, UnitChangeEvent, WeatherResultComponent } from "../../features/weather-result-card/weather-result.component";
import { HighLightPipe } from "../../shared/pipes/high-light.pipe";
import { PluckPipe } from "../../shared/pipes/pluck.pipe";
import { SignalSore } from "../../store/store";
import { AutocompleteOption } from "../../utilities/models/autocomplete-option";
import { AutocompleteResOption } from "../../utilities/models/autocomplete-result";
import { WeatherResult } from "../../utilities/models/weather-result";

@Component({
  selector: "weather-space-lobby",
  templateUrl: "./lobby.component.html",
  styleUrls: ["./lobby.component.scss"],
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

  options: Signal<AutocompleteResOption[]>;
  currentSelection: Signal<AutocompleteResOption>;
  searchControl!: FormControl<AutocompleteOption>;
  control!: Signal<FormControl<AutocompleteResOption>>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nfb: NonNullableFormBuilder,
  ) {
    this.options = this.#store.entities;
    this.currentSelection = this.#store.currentSelection;
    this.control = computed(() => this.nfb.control(this.currentSelection()));
  }

  weatherResult$!: Observable<Partial<WeatherResult> | null>;
  options$!: Observable<AutocompleteOption[]>;
  metric$!: Observable<boolean>;

  selectedOptionSource$: BehaviorSubject<AutocompleteOption | null> =
    new BehaviorSubject<AutocompleteOption | null>(null);
  queryChangeSource$: Subject<string> = new Subject<string>();

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

  onSelectChange({selected, source}: SelectChangeEvent): void {
  }

  onUnitTempChange({metric}: UnitChangeEvent): void {
  }

  displayFn(option: AutocompleteResOption): string {
    return option ? `${option.LocalizedName}, ${option.Country.LocalizedName}` : "";
  }
}