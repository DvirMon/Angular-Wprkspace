import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { Places } from '../places/places.model';
import { inject } from '@angular/core';
import { PlacesService } from '../../places/places.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

interface PlacesState {
  places: Places[];
}

const initialState: PlacesState = { places: [] };

export function withPlaces() {
  return signalStoreFeature(
    withState(initialState),
      withMethods((state, placesService = inject(PlacesService)) => ({
        
          loadPlaces : rxMethod<void>
    }))
  );
}
