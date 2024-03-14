import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks } from '@ngrx/signals';
import { BooksDataService } from '../books/data.service';
import { withBasket } from './with-basket.feature';
import { withBooks } from './with-books.feature';
import { withSearchTerm } from './with-search-term';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('books'),
  withBasket(),
  withBooks(BooksDataService),
  withSearchTerm(),
  withHooks({
    onInit(store) {
      store.loadBooks(store.searchTerm);
    },
  })
);
