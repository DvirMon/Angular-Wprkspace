import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';

import {
  Entity,
  EntityLoader,
  LoaderService,
  createLoader,
  loadEntities,
  loadSlice,
  onLoadCollection,
  onUpdateCollection
} from '@dom/helpers';
import { Book } from '../books/books';

const COLLECTION = 'volumes';
const SLICE = 'volInfo';


export function withBooks(
  Loader: LoaderService<
    EntityLoader<string, Entity, 'loadVolumes' | 'loadVolumes'> 
  >
) {
  return signalStoreFeature(
    withEntities({ entity: type<Book>(), collection: COLLECTION }),
    withMethods((state) => ({
      loadVolumes: loadEntities(
        createLoader(Loader, 'loadVolumes'),
        onLoadCollection(state, COLLECTION)
      ),
      updateVolumes: loadEntities(
        createLoader(Loader, 'loadVolumes'),
        onUpdateCollection(state, COLLECTION)
      ),
      loadVolumeInfo: loadSlice(
        createLoader(Loader, 'loadVolumeInfo'),
        state,
        SLICE
      ),
    }))
  );
}
