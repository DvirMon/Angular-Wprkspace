import { Type, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  StateSignal,
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, pipe, switchMap } from 'rxjs';
import { WeatherHttpService } from '../shared/services/weather-http.service';
import { SelectionResult } from './with-select.feature';
import {
  EntityId,
  addEntities,
  setAllEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { CurrentWeather } from '../shared/models/current-weather-result';
import { EntityResult } from './with-load-entity.feature';

// Function to handle the success response of loading entities
// function handleLoadSuccess(state: StateSignal<object>) {
//   return (res: CurrentWeather) => {
//     patchState(state, addEntities([]));
//   };
// }

// export const withCurrentWeather = () =>
//   signalStoreFeature(
//     withMethods((state, weatherHttpService = inject(WeatherHttpService)) => ({
//       loadCurrentWeather: rxMethod<SelectionResult>(
//         pipe(
//           switchMap((selection) =>
//             weatherHttpService.getCurrentWeather(selection.id)
//           ),
//           tapResponse({
//             next: handleLoadSuccess<Entity>(state),
//             error: console.error,
//           })
//         )
//       ),
//     }))
//   );

function getKey(collection: string): string {
  return collection == 'entities' ? collection : collection + 'Entities';
}

function handleLoadSuccess<Entity extends { id: EntityId }>(
  state: any,
  collection: string
) {
  return (res: EntityResult<Entity>) => {
    const key: string = getKey(collection);
    const hasEntities = state[key]() && state[key]().length > 0;

    // If entities already exist, use setAllEntities to replace them
    if (hasEntities) {
      patchState(
        state as StateSignal<object>,
        setAllEntities(res.content, { collection })
      );
    } else {
      // If no entities exist yet, use addEntities to add them
      patchState(
        state as StateSignal<object>,
        addEntities(res.content, { collection })
      );
    }
  };
}

function loadEntitiesMethod<Entity extends { id: EntityId }>(
  loader: (query: number) => Observable<EntityResult<any>>,
  state: any,
  collection: string
) {
  return rxMethod<number>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
            next: handleLoadSuccess(state, collection),
            error: console.error,
          })
        )
      )
    )
  );
}


// Refactored withLoadEntities function
export function withCurrentWeather<Entity extends { id: EntityId }>(
) {

  return signalStoreFeature(
    withMethods((state, service = inject(WeatherHttpService)) => ({
      loadCurrentWeather: loadEntitiesMethod<Entity>(
        service.getCurrentWeather,
        state,
        "current"
      ),
    }))
  );
}
