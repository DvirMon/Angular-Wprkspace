import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Places } from '../places/places.model';
import { inject } from '@angular/core';
import { PlacesService } from '../../places/places.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

interface PlacesState {
  places: Places[];
}

const initialState: PlacesState = { places: [] };

export function withPlaces() {
  return signalStoreFeature(
    withState(initialState),
    withMethods((state, placesService = inject(PlacesService)) => ({
      loadPlaces: rxMethod<void>(
        pipe(
          switchMap(() =>
            placesService.getPlaces$().pipe(
              tapResponse({
                next: (places) => patchState(state, { places }),
                error: console.error,
              })
            )
          )
        )
      ),
    }))
  );
}
