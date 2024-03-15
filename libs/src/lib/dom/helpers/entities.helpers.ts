import {
  Injector,
  ProviderToken,
  Signal,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { StateSignal, patchState } from '@ngrx/signals';
import { EntityId, addEntities, setAllEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, Observable, pipe, switchMap } from 'rxjs';

export interface Entity {
  id: EntityId;
}

export type EntityMap = Record<EntityId, Entity>;

export interface EntityResult<Entity> {
  content: Entity[];
}

export type Loader<T, Entity, MethodName extends string> = {
  [K in MethodName]: (args: T) => Observable<EntityResult<Entity>>;
};

export type LoaderService<T> = ProviderToken<T>;

export type LoadService<Loader> = ProviderToken<Loader>;

function getKey(collection: string): string {
  return collection == 'entities' ? collection : collection + 'Entities';
}

// Function to handle the success response of loading entities
export function handleLoadSuccess<Entity extends { id: EntityId }>(
  state: unknown,
  collection: string
) {
  return (res: EntityResult<Entity>) => {
    const key: string = getKey(collection);
    const localState = state as Record<string, Signal<Array<Entity>>>;
    const hasEntities = localState[key]()?.length > 0;
    const update = hasEntities ? setAllEntities : addEntities;


    if (key === 'entities') {
      patchState(state as StateSignal<object>, update(res.content));
    } else {
      patchState(
        state as StateSignal<object>,
        update(res.content, { collection })
      );
    }
  };
}

export function createLoader<T>(
  Loader: LoadService<Loader<T, Entity, string>>,
  methodName: string
): (...args: T[]) => Observable<EntityResult<Entity>> {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: T) => loader[methodName](query);
  });
}

export function loadEntities<T>(
  loader: (query: T) => Observable<EntityResult<Entity>>,
  state: StateSignal<object>,
  collection = 'entities'
) {

  return rxMethod<T>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
            next: handleLoadSuccess(state, collection),
            error: () => EMPTY,
          })
        )
      )
    )
  );
}
