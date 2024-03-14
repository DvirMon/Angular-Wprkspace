import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks } from '@ngrx/signals';
import { BooksDataService } from '../books/data.service';
import { withBooks } from './with-books.feature';
import { withSearchTerm } from './with-search-term';
import { withShelf } from './with-shelf.feature';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('books'),
  withShelf(),
  withBooks(BooksDataService),
  withSearchTerm(),
  withHooks({
    onInit(store) {
      store.loadBooks(store.searchTerm);
    },
  })
);
