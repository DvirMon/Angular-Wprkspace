import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';

import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
  loadSlice,
} from '@dom';
import { Book } from '../books/books';

const COLLECTION = 'volumes';
const SLICE = 'volInfo';

type BooksLoader = Loader<string, Entity, 'loadVolumes'>;

export function withBooks(Loader: LoaderService<BooksLoader>) {
  return signalStoreFeature(
    withEntities({ entity: type<Book>(), collection: COLLECTION }),
    withMethods((state) => {
      const volumeLoader = createLoader(Loader, 'loadVolumes');
      const volumeInfoLoader = createLoader(Loader, 'loadVolumeInfo');
      return {
        loadVolumes: loadEntities(volumeLoader, state, COLLECTION),
        loadVolumeInfo: loadSlice(volumeInfoLoader, state, SLICE),
      };
    })
  );
}
