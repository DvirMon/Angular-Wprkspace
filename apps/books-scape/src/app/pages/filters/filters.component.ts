import { JsonPipe } from '@angular/common';
import { Component, Signal, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { AutocompleteComponent, getFormKeys } from '@dom';
import { StateSignal, patchState, signalState } from '@ngrx/signals';
import { Book } from '../../books/books';
import { LayoutComponent } from '../../layout/layout.component';
import {
  Loader,
  LoaderService,
  createOptionsLoader,
  handleGroupOptions,
  registerGroupOptions,
} from '../../shared/options.helper';
import { FiltersDataService } from './data.service';
import { AppStore } from '../../store/store';

@Component({
  selector: 'books-scape-filters',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,

    MatFormField,
    MatLabel,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    MatFormField,

    MatSelectModule,
    MatSelectionList,
    MatListOption,
    LayoutComponent,
    AutocompleteComponent,
  ],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersPageComponent {
  #store = inject(AppStore);
  #filterService = inject(FiltersDataService);

  public readonly optionsMap = signalState<Record<string, Book[]>>({});

  public readonly showForm = computed(
    () => !!Object.keys(this.optionsMap()).length
  );

  public readonly booksAutocomplete: FormGroup;

  public readonly booKeys: Signal<string[]>;

  books: Signal<Book[]>;

  #handleOptionsChanged = this._handleOptions(
    FiltersDataService,
    this.optionsMap
  );

  constructor() {
    this.booksAutocomplete = this._buildGroup();

    this.booKeys = getFormKeys(this.booksAutocomplete);

    this.books = this.#store.volumesEntities;

    this.#handleOptionsChanged(registerGroupOptions(this.booksAutocomplete));

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

  private _buildGroup() {
    return inject(NonNullableFormBuilder).group({
      book1: ['Angular'],
      book2: ['Angular'],
      book3: ['Foundation'],
      book4: ['The Hobbit'],
    });
  }

  private _handleOptions(
    Loader: LoaderService<Loader<string, Book, 'loadOptions'>>,
    state: StateSignal<object>
  ) {
    const loader = createOptionsLoader(Loader, 'loadOptions');

    return handleGroupOptions(loader, state);
  }
}
