import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, tap } from 'rxjs';

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
export class SearchInputComponent implements OnInit {
  initialValue = input<string>();
  searchResultsData = input<SearchResultsData>();

  searchControl: FormControl<string> = new FormControl();

  @Output() termChanged = new EventEmitter<string>();

  private onTermChanged = rxMethod<string>(
    pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((value) => this.termChanged.emit(value))
    )
  );

  constructor() {
    this.onTermChanged(this.searchControl.valueChanges);
  }

  ngOnInit(): void {
    // Set initial value if provided

    const value: string | undefined = this.initialValue();

    if (value != undefined) {
      this.searchControl.setValue(value);
    }
  }
}
