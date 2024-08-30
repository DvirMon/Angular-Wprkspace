import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { Places } from '../../places/places.model';
import {
  EntityLoader,
  LoaderService,
  createLoader,
  loadSlice,
  Entity,
} from '@dom/helpers';

interface PlacesState {
  places: Places[];
}

const initialState: PlacesState = { places: [] };

const SLICE = 'places';

type PlacesLoader = EntityLoader<void, Entity, 'loadPlaces'>;

export function withPlaces(Loader: LoaderService<PlacesLoader>) {
  return signalStoreFeature(
    withState(initialState),
    withMethods((store) => {
      const loader = createLoader(Loader, 'loadPlaces');
      return {
        loadPlaces: loadSlice<void>(loader, store, SLICE),
      };
    })
  );
}
