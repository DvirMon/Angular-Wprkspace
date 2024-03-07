import {
  Injector,
  ProviderToken,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { StateSignal, patchState } from '@ngrx/signals';
import { EntityId, addEntities, setAllEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, pipe, switchMap } from 'rxjs';

export interface Entity {
  id: EntityId;
}

export type EntityMap = Record<EntityId, Entity>;

export interface EntityResult<Entity> {
  content: Entity[];
}

export type Loader<Entity, MethodName extends string> = {
  [K in MethodName]: (...args: any[]) => Observable<EntityResult<Entity>>;
};

export type LoaderService<T> = ProviderToken<T>;

export type LoadService<Loader> = ProviderToken<Loader>;

function getKey(collection: string): string {
  return collection == 'entities' ? collection : collection + 'Entities';
}

// Function to handle the success response of loading entities
export function handleLoadSuccess<Entity extends { id: EntityId }>(
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

export function createLoader(
  Loader: LoadService<Loader<Entity, string>>,
  methodName: string
): (...args: any[]) => Observable<EntityResult<Entity>> {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: string | number) => loader[methodName](query);
  });
}

export function loadEntitiesQueryMethod(
  loaderMethod: Function,
  state: StateSignal<object>,
  collection: string = 'entities'
) {
  return rxMethod<string | number>(
    pipe(
      switchMap((query) =>
        loaderMethod(query).pipe(
          tapResponse({
            next: handleLoadSuccess(state, collection),
            error: console.error,
          })
        )
      )
    )
  );
}

export function loadEntitiesMethod(
  loaderMethod: Function,
  state: StateSignal<object>,
  collection: string = 'entities'
) {
  return rxMethod<void>(
    pipe(
      switchMap(() =>
        loaderMethod().pipe(
          tapResponse({
            next: handleLoadSuccess(state, collection),
            error: console.error,
          })
        )
      )
    )
  );
}

export function loadEntities(
  loader: (...query: any[]) => Observable<EntityResult<Entity>>,
  state: StateSignal<object>,
  slice: EntityMap,
  next: (...args: any[]) => any
) {
  return rxMethod<string | number>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
            next: next(state, slice),
            error: console.error,
          })
        )
      )
    )
  );
}
