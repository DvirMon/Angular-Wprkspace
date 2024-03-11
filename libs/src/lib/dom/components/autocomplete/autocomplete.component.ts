import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  effect,
  input,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  pipe,
  tap,
} from 'rxjs';

@Component({
  selector: 'dom-autocomplete',
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
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent<T> {
  label = input<string>('Search...');
  defaultValue = input<string>();
  options = input.required<T[]>();
  control = input.required<FormControl<T>>();
  optionTemplate = input<TemplateRef<unknown>>();

  @Input() displayFn: (option: T) => string = () => '';

  @Output() queryChanged = new EventEmitter<string>();
  @Output() optionSelected = new EventEmitter<T>();

  valueChanged: Subject<string> = new Subject();

  private onQueryChange = rxMethod<string>(
    pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((value) => (!value ? this.defaultValue() : value)),
      tap((value) => this.queryChanged.emit(value))
    )
  );

  constructor() {
    effect(
      () => {
        if (this.control()) {
          this.onQueryChange(this.valueChanged.asObservable());
        }
      },
      { allowSignalWrites: true }
    );
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const option: T = event.option.value;
    this.optionSelected.emit(option);
  }

  onQueryChanged() {
    this.valueChanged.next(this.control().value as string);
  }
}
