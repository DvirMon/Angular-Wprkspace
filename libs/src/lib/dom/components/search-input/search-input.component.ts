import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  effect,
  input,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Subject, debounceTime, distinctUntilChanged, pipe, tap } from 'rxjs';

export interface SearchResultsData {
  totalResults: number;
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
  label = input<string>();
  initialValue = input<string>();
  searchResultsData = input<SearchResultsData>();
  control = input.required<FormControl<string>>();

  #valueChanged: Subject<string> = new Subject();

  @Output() termChanged = new EventEmitter<string>();

  private onTermChanged = rxMethod<string>(
    pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((value) => this.termChanged.emit(value))
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

  onInputChanged() {
    this.#valueChanged.next(this.control().value as string);
  }
}
