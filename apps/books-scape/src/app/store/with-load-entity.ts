import { Entity } from '@angular-architects/ngrx-toolkit';
import {
  Injector,
  ProviderToken,
  Signal,
  WritableSignal,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  StateSignal,
  patchState,
  signalStoreFeature,
  withMethods,
} from '@ngrx/signals';
import {
  EntityId,
  EntityMap,
  addEntities,
  setAllEntities,
  setEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, pipe, switchMap, tap } from 'rxjs';

// Loader interface for loading entities

export interface Loader<Entity> {
  load: (query?: string) => Observable<{ content: Entity[] }>;
}

// Function to create a loader
function createLoader<Entity extends { id: EntityId }>(
  Loader: ProviderToken<Loader<Entity>>
) {
  return runInInjectionContext(inject(Injector), () => {
    const loader = inject(Loader);
    return (query?: string) => loader.load(query);
  });
}

function handleLoadSuccess<Entity extends { id: EntityId }>(state: any) {
  return (res: { content: Entity[] }) => {
    const hasEntities = state.entities() && state.entities().length > 0;

    // If entities already exist, use setAllEntities to replace them
    if (hasEntities) {
      patchState(state as StateSignal<object>, setAllEntities(res.content));
    } else {
      // If no entities exist yet, use addEntities to add them
      patchState(state as StateSignal<object>, addEntities(res.content));
    }
  };
}

// Modular rxMethod function for loading entities
function loadEntitiesMethod<Entity extends { id: EntityId }>(
  loader: (query?: string) => Observable<{ content: Entity[] }>,
  state: object
) {
  return rxMethod<string>(
    pipe(
      switchMap((query: string) =>
        loader(query).pipe(
          tapResponse({
            next: handleLoadSuccess<Entity>(state),
            error: () => {
              console.log('error');
            },
          })
        )
      )
    )
  );
}

// Refactored withLoadEntities function
export function withLoadEntities<Entity extends { id: EntityId }>(
  Loader: ProviderToken<Loader<Entity>>
) {
  return signalStoreFeature(
    withEntities<Entity>(),
    withMethods((state) => {
      const loader = createLoader<Entity>(Loader);
      return {
        load: loadEntitiesMethod<Entity>(loader, state),
      };
    })
  );
}
