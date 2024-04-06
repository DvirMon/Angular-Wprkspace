import { Injector, inject, runInInjectionContext } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { StateSignal, patchState } from '@ngrx/signals';
import { EntityId, addEntities, setAllEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, Observable, pipe, switchMap } from 'rxjs';
import { Entity, EntityLoader, LoaderService } from './types';

export function onLoadSlice<Entity extends { id: EntityId }>(
  state: StateSignal<object>,
  slice: keyof StateSignal<object>
) {
  return (res: Entity[] | Entity) => patchState(state, { [slice]: res });
}

export function onLoadEntities<Entity extends { id: EntityId }>(
  state: StateSignal<object>
) {
  return (res: Entity[]) => patchState(state, addEntities(res));
}


// Function to handle the success response of loading entities
export function onLoadCollection<Entity extends { id: EntityId }>(
  state: StateSignal<object>,
  collection: string
) {
  return (res: Entity[] | Entity) =>
    patchState(state, addEntities(res as Entity[], { collection }));
}

// Function to handle the success response of loading entities
export function onUpdateCollection<Entity extends { id: EntityId }>(
  state: StateSignal<object>,
  collection: string
) {
  return (res: Entity[] | Entity) => {
    patchState(
      state as StateSignal<object>,
      setAllEntities(res as Entity[], { collection })
    );
  };
}

export function createLoader<T>(
  Loader: LoaderService<EntityLoader<T, Entity, string>>,
  methodName: string
): (...args: T[]) => Observable<Entity[] | Entity> {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: T) => loader[methodName](query);
  });
}

// export function createSliceLoader<T>(
//   Loader: LoaderService<EntityLoader<T, Entity, string>>,
//   methodName: string
// ): (...args: T[]) => Observable<Entity> {
//   return runInInjectionContext(inject(Injector), () => {
//     const loader = inject(Loader);
//     return (query: T) => loader[methodName](query);
//   });
// }

export function loadCollection<T>(
  loader: (query: T) => Observable<Entity[]>,
  next: (value: Entity[]) => void
) {
  return rxMethod<T>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
            next: next,
            error: () => EMPTY,
          })
        )
      )
    )
  );
}
export function loadEntities<T>(
  loader: (query: T) => Observable<Entity[] | Entity>,
  next: (value: Entity[] | Entity) => void
) {
  return rxMethod<T>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
            next: next,
            error: () => EMPTY,
          })
        )
      )
    )
  );
}

export function loadSlice<T>(
  loader: (query: T) => Observable<Entity[] | Entity>,
  state: StateSignal<object>,
  slice: string
) {
  return rxMethod<T>(
    pipe(
      switchMap((query: T) =>
        loader(query).pipe(
          tapResponse({
            next: (res: Entity[] | Entity) =>
              patchState(state, { [slice]: res }),
            error: () => EMPTY,
          })
        )
      )
    )
  );
}
