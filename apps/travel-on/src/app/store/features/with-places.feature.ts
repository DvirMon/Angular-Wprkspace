import { Entity, Loader, LoaderService, createLoader, createSliceLoader, loadSlice } from '@dom';
import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { Places } from '../places/places.model';

interface PlacesState {
  places: Places[];
}

const initialState: PlacesState = { places: [] };

const SLICE = 'places';

type PlacesLoader = Loader<void, Entity, 'loadPlaces'>;

export function withPlaces(Loader: LoaderService<PlacesLoader>) {
  return signalStoreFeature(
    withState(initialState),
    withMethods((store) => {
      const loader = createLoader(Loader, 'loadPlaces');
      return {
        loadPlaces: loadSlice<void>(loader, SLICE, store),
      };
    })
  );
}
