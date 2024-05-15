import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  effect,
  input,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatOption } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  pipe,
  tap,
} from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { OptionContentDirective } from '../../../../directives';
import { FormOption } from '../../models/input-options';

@Component({
  selector: 'dom-form-autocomplete',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgTemplateOutlet,
    NgTemplateOutlet,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOption,
    MatListModule,
    MatSelectionList,
    OptionContentDirective,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAutocompleteComponent<TOption extends FormOption> {
  label = input<string>('');
  defaultValue = input<string>();
  options = input.required<TOption[]>();
  control = input.required<FormControl<FormOption>>();
  multi = input<boolean>(false);

  optionTemplate = input<TemplateRef<FormOption>>();

  @ContentChild(OptionContentDirective)
  optionContentDirective!: OptionContentDirective;

  @Input() displayFn: (option: TOption) => string = () => '';

  @Output() queryChanged = new EventEmitter<string>();
  @Output() optionSelected = new EventEmitter<TOption>();

  #valueChanged: Subject<string> = new Subject();

  private onTermChanged = rxMethod<string>(
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
          this.onTermChanged(this.#valueChanged.asObservable());
        }
      },
      { allowSignalWrites: true }
    );
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const option: TOption = event.option.value;
    this.optionSelected.emit(option);
  }

  onInputChanged() {
    this.#valueChanged.next(this.control().value as string);
  }
}
