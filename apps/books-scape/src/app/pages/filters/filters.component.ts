import {
  JsonPipe,
  NgFor,
  NgIf,
  NgTemplateOutlet,
  TitleCasePipe,
} from '@angular/common';
import {
  Component,
  Inject,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatOption, MatOptionModule } from '@angular/material/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import {
  MAT_SELECT_CONFIG,
  MatSelect,
  MatSelectModule,
} from '@angular/material/select';
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
import { AppStore } from '../../store/store';
import { FiltersDataService } from './data.service';
import { MatIcon } from '@angular/material/icon';

interface Filters {
  book1: FormControl<string>;
  book2: FormControl<string>;
  book3: FormControl<string>;
  book4: FormControl<string>;
}

@Component({
  selector: 'books-scape-filters',
  standalone: true,
  imports: [
    NgIf,
    JsonPipe,
    TitleCasePipe,
    ReactiveFormsModule,
    MatFormField,
    MatSuffix,
    MatLabel,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatOption,
    MatSelect,
    MatIcon,
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

  public readonly booksAutocomplete: FormGroup<Filters>;

  public readonly booKeys: WritableSignal<(keyof Filters)[]>;

  books: Signal<Book[]>;

  #handleOptionsChanged = this._handleOptions(
    FiltersDataService,
    this.optionsMap
  );

  constructor() {
    this.booksAutocomplete = this._buildGroup();

    this.booKeys = getFormKeys<Filters>(this.booksAutocomplete);

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

  private _buildGroup(): FormGroup<Filters> {
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
