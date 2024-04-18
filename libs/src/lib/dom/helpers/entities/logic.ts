<<<<<<< HEAD
import { Injector, inject, runInInjectionContext } from '@angular/core';
=======
import { Injector, Signal, inject, runInInjectionContext } from '@angular/core';
>>>>>>> b65f585 (remove  EntityResult)
import { tapResponse } from '@ngrx/operators';
import { StateSignal, patchState } from '@ngrx/signals';
import { EntityId, addEntities, setAllEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, Observable, pipe, switchMap } from 'rxjs';
<<<<<<< HEAD
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

/**
 * Creates a function that invokes a specified method on a LoaderService instance.
 * @param Loader The LoaderService instance.
 * @param methodName The name of the method to invoke on the LoaderService instance.
 * @returns A function that accepts parameters for the specified method and returns an Observable of the result.
 * @template T The type of parameters accepted by the method.
 */

export function createLoader<T>(
  Loader: LoaderService<EntityLoader<T, Entity, string>>,
  methodName: string
): (...args: T[]) => Observable<Entity[] | Entity> {
=======
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
>>>>>>> b65f585 (remove  EntityResult)
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: T) => loader[methodName](query);
  });
}

<<<<<<< HEAD
export function loadCollection<T>(
  loader: (query: T) => Observable<Entity[]>,
  next: (value: Entity[]) => void
=======
export function loadEntities<T>(
  loader: (query: T) => Observable<Entity[]>,
  state: StateSignal<object>,
  collection = 'entities'
>>>>>>> b65f585 (remove  EntityResult)
) {
  return rxMethod<T>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
<<<<<<< HEAD
            next: next,
=======
            next: handleLoadEntitiesSuccess(state, collection),
>>>>>>> b65f585 (remove  EntityResult)
            error: () => EMPTY,
          })
        )
      )
    )
  );
}

<<<<<<< HEAD
/**
 * Loads entities using the provided loader function and invokes the specified 
 * callback with the result.
 * @param loader A function that accepts a query parameter of type T and returns
 *               an Observable of Entity or Entity[].
 * @param next A callback function to handle the result of the loading operation.
 * @template T The type of the query parameter.
 */

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
=======
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
>>>>>>> b65f585 (remove  EntityResult)
  state: StateSignal<object>,
  slice: string
) {
  return rxMethod<T>(
    pipe(
      switchMap((query: T) =>
        loader(query).pipe(
          tapResponse({
<<<<<<< HEAD
            next: (res: Entity[] | Entity) =>
              patchState(state, { [slice]: res }),
=======
            next: (res: Entity[]) => patchState(state, { [slice]: res }),
>>>>>>> b65f585 (remove  EntityResult)
            error: () => EMPTY,
          })
        )
      )
    )
  );
}
