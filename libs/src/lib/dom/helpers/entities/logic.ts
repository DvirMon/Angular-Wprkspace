import { Injector, Signal, inject, runInInjectionContext } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { StateSignal, patchState } from '@ngrx/signals';
import { EntityId, addEntities, setAllEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, Observable, pipe, switchMap } from 'rxjs';
import { Entity, Loader, LoaderService } from './types';

function getKey(collection: string): string {
  return collection == 'entities' ? collection : collection + 'Entities';
}

// Function to handle the success response of loading entities
export function handleLoadEntitiesSuccess<Entity extends { id: EntityId }>(
  state: unknown,
  collection: string
) {
  return (res: Entity[]) => {
    const key: string = getKey(collection);
    const localState = state as Record<string, Signal<Array<Entity>>>;
    const hasEntities = localState[key]()?.length > 0;
    const update = hasEntities ? setAllEntities : addEntities;

    if (key === 'entities') {
      patchState(state as StateSignal<object>, update(res));
    } else {
      patchState(state as StateSignal<object>, update(res, { collection }));
    }
  };
}

export function createLoader<T>(
  Loader: LoaderService<Loader<T, Entity, string>>,
  methodName: string
): (...args: T[]) => Observable<Entity[]> {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: T) => loader[methodName](query);
  });
}

export function loadEntities<T>(
  loader: (query: T) => Observable<Entity[]>,
  state: StateSignal<object>,
  collection = 'entities'
) {
  return rxMethod<T>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
            next: handleLoadEntitiesSuccess(state, collection),
            error: () => EMPTY,
          })
        )
      )
    )
  );
}

export function createSliceLoader<T>(
  Loader: LoaderService<Loader<T, Entity, string>>,
  methodName: string
): (args: T) => Observable<Entity[]> {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: T) => loader[methodName](query);
  });
}

export function loadSlice<T>(
  loader: (query: T) => Observable<Entity[]>,
  state: StateSignal<object>,
  slice: string
) {
  return rxMethod<T>(
    pipe(
      switchMap((query: T) =>
        loader(query).pipe(
          tapResponse({
            next: (res: Entity[]) => patchState(state, { [slice]: res }),
            error: () => EMPTY,
          })
        )
      )
    )
  );
}
