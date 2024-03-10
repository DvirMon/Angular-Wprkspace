import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks, withState } from '@ngrx/signals';
import { Book } from '../books/books';
import { BooksService } from '../books/books.service';
import { withBooks } from './with-books.feature';
import { withCart } from './with-cart';
import { withSearchTerm } from './with-search-term';

export interface AppState {
  book: Book | null;
  cart: Book[];
}

const initialState: AppState = {
  book: null,
  cart: [],
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('books'),
  withState(initialState),
  withBooks(BooksService),
  withCart(),
  withSearchTerm(),
  withHooks({
    onInit(store) {
      store.loadBooks(store.searchTerm);
    },
  })
);
