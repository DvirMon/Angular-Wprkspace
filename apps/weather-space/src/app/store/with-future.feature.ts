import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { EntityId, withEntities } from '@ngrx/signals/entities';
import { FutureWeather } from '../shared/models/future-weather-result';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  handleLoadSuccess,
  loadEntitiesQueryMethod,
} from './entities.helpers';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { Signal } from '@angular/core';

type WeatherFutureLoader = Loader<Entity, 'loadFutureWeather'>;

// Refactored withLoadEntities function
export function withFutureWeather(
  Loader: LoaderService<WeatherFutureLoader>,
  collection: string
) {
  return signalStoreFeature(
    withEntities({ entity: type<FutureWeather>(), collection: 'future' }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadFutureWeather');
      return {
        // loadFutureWeather: loadEntitiesQueryMethod(loader, state, collection),
        loadFutureWeather: rxMethod<{ id: EntityId; metric: boolean }>(
          pipe(
            switchMap(({ id, metric }) =>
              loader({ id, metric }).pipe(
                tapResponse({
                  next: handleLoadSuccess(state, 'future'),
                  error: console.error,
                })
              )
            )
          )
        ),
        // loadFutureWeather: rxMethod<{
        //   id: Signal<EntityId>;
        //   metric: Signal<boolean>;
        // }>(
        //   pipe(
        //     switchMap(({ id, metric }) =>
        //       loader(id(), metric()).pipe(
        //         tapResponse({
        //           next: () => {},
        //           error: console.error,
        //         })
        //       )
        //     )
        //   )
        // ),
      };
    })
  );
}
