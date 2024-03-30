import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, effect, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, tap } from 'rxjs';
import { createValueChangesEmitter } from '../form-input';

export interface SearchMediaResultsData {
  totalMediaResults: number;
}

@Component({
  selector: 'dom-search-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  control = input.required<FormControl<string>>();

  label = input<string>();
  initialValue = input<string>();

  @Output() valueChanged = new EventEmitter<string>();

  private handleValueChanges = createValueChangesEmitter((value) =>
    this.valueChanged.emit(value)
  );

  constructor() {
    effect(
      () => {
        if (this.control()) {
          this.handleValueChanges(this.control().valueChanges);
        }
      },
      { allowSignalWrites: true }
    );
  }
}
