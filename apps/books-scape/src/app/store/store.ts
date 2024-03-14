import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks } from '@ngrx/signals';
import { BooksService } from '../books/books.service';
import { withBasket } from './with-basket.feature';
import { withBooks } from './with-books.feature';
import { withSearchTerm } from './with-search-term';

// export interface AppState {
//   book: Book | null;
//   cart: Book[];
// }

// const initialState: AppState = {
//   book: null,
//   cart: [],
// };

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('books'),
  withBasket(),
  withBooks(BooksService),
  withSearchTerm(),
  withHooks({
    onInit(store) {
      store.loadBooks(store.searchTerm);
    },
  })
);
