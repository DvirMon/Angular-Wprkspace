import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  input,
} from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from "@angular/material/autocomplete";
import { MatOption } from "@angular/material/core";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@Component({
  selector: "weather-space-autocomplete",
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    ReactiveFormsModule,
    NgIf,
    NgTemplateOutlet,
    MatFormField,
    MatLabel,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
  ],
  templateUrl: "./autocomplete.component.html",
  styleUrl: "./autocomplete.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent<T> {

  label = input<string>("Search...");
  options = input.required<T[]>();
  control = input.required<FormControl<T>>();

  optionTemplate = input<TemplateRef<unknown>>();
  // @Input() optionTemplate!: TemplateRef<unknown>;

  @Input() displayFn: (option: T) => string = () => "";

  @Output() queryChanged = new EventEmitter<string>();
  @Output() optionSelected = new EventEmitter<T>();

  onQueryChange(query: string): void {
    this.queryChanged.emit(query);
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const option: T = event.option.value;
    this.optionSelected.emit(option);
  }
}
