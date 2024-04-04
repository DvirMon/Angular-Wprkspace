import { JsonPipe } from '@angular/common';
import { Component, Signal, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatOption,
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { AutocompleteComponent, LoaderService, getFormKeys } from '@dom';
import { StateSignal, patchState, signalState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  pipe,
  switchMap,
  tap,
} from 'rxjs';
import { Book } from '../../books/books';
import { LayoutComponent } from '../../layout/layout.component';
import { Loader, createLoader } from '../../shared/data.helpers';
import { FiltersDataService } from './data.service';

type OptionLoader = Loader<string, Book, 'loadOptions'>;

@Component({
  selector: 'books-scape-filters',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSelectionList,
    MatOption,
    MatListOption,
    LayoutComponent,
    AutocompleteComponent,
  ],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersPageComponent {
  public readonly optionsMap = signalState<Record<string, Book[]>>({});

  #filterService = inject(FiltersDataService);

  public readonly booksAutocomplete: FormGroup;

  public readonly booKeys: Signal<string[]>;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  #handleOptionsChanged = rxMethod(
    pipe(
      switchMap(({ key, value }: Record<string, string>) =>
        this.#filterService
          .loadOptions(value)
          .pipe(map((data) => ({ [key]: data })))
      ),
      tap((value) =>
        patchState(this.optionsMap, { ...this.optionsMap(), ...value })
      )
    )
  );

  constructor() {
    this.booksAutocomplete = inject(NonNullableFormBuilder).group({
      book1: ['Angular'],
      book2: ['Angular'],
      book3: ['Foundation'],
      book4: ['The Hobbit'],
    });

    this.booKeys = getFormKeys(this.booksAutocomplete);

    this.#handleOptionsChanged(
      this.registerGroupOptions(this.booksAutocomplete)
    );

    const results = toSignal(this.#filterService.loadFilterOptions());

    effect(
      () => {
        if (results()) {
          patchState(this.optionsMap, { ...results() });
        }
      },
      { allowSignalWrites: true }
    );
  }

  registerGroupOptions(group: FormGroup) {
    const observables$ = Object.keys(group.controls).map((key: string) =>
      group.controls[key].valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((value) => ({ key: key, value }))
      )
    );

    return merge(...observables$);
  }

  handleOptions(
    Loader: LoaderService<OptionLoader>,
    state: StateSignal<object>
  ) {
    const loader = createLoader(Loader, 'loadOptions');

    return rxMethod(
      pipe(
        switchMap(({ key, value }: Record<string, string>) =>
          loader(value).pipe(map((data) => ({ [key]: data })))
        ),
        tap((value) => patchState(state, { ...state, ...value }))
      )
    );
  }
}
