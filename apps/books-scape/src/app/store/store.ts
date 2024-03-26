import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks } from '@ngrx/signals';
import { VolumesDataService } from '../books/data.service';
import { withBooks } from './with-books.feature';
import { withSearchTerm } from './with-search-term';
import { withBookshelf } from './with-bookshelf.feature';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('books'),
  withBooks(VolumesDataService),
  withBookshelf(),
  withSearchTerm(),
  withHooks({
    onInit(store) {
      store.loadVolumes(store.searchTerm);
    },
  })
);
