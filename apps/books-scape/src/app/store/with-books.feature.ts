import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';
import { Book } from '../books/books';

type BooksLoader = Loader<string, Entity, 'loadBooks'>;

export function withBooks(Loader: LoaderService<BooksLoader>) {
  return signalStoreFeature(
    withEntities<Book>(),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadBooks');
      return {
        loadBooks: loadEntities(loader, state),
      };
    })
  );
}
