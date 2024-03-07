import {inject, Injector, ProviderToken, runInInjectionContext,} from '@angular/core';
import {tapResponse} from '@ngrx/operators';
import {patchState, signalStoreFeature, StateSignal, withMethods,} from '@ngrx/signals';
import {addEntities, EntityId, setAllEntities,} from '@ngrx/signals/entities';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {Observable, pipe, switchMap} from 'rxjs';

// interface for result

export interface Entity {
  id: EntityId;
}

export interface EntityResult<Entity> {
  content: Entity[];
}

// Loader interface for loading entities
export interface Loader<Entity> {
  load?: () => Observable<EntityResult<Entity>>;
  loadQuery: (query: string) => Observable<EntityResult<Entity>>;
}

// Function to create a loader
function createLoader<Entity extends { id: EntityId }>(
  Loader: ProviderToken<Loader<Entity>>
) {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query: string) => loader.loadQuery(query);
  });
}

function getKey(collection: string): string {
  return collection == 'entities' ? collection : collection + 'Entities';
}

// Function to handle the success response of loading entities
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

// Modular rxMethod function for loading entities
function loadEntitiesMethod<Entity extends { id: EntityId }>(
  loader: (query: string) => Observable<EntityResult<Entity>>,
  state: StateSignal<object>,
  collection: string
) {
  return rxMethod<string>(
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
export function withLoadEntities<Entity extends { id: EntityId }>(
  Loader: ProviderToken<Loader<Entity>>,
  collection: string = 'entities'
) {
  return signalStoreFeature(
    withMethods((state) => {
      const loader = createLoader<Entity>(Loader);
      return {
        loadQuery: loadEntitiesMethod<Entity>(loader, state, collection),
      };
    })
  );
}
