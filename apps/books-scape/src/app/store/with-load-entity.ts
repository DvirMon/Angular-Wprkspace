import {
  Injector,
  ProviderToken,
  inject,
  runInInjectionContext,
} from "@angular/core";
import { tapResponse } from "@ngrx/operators";
import { StateSignal, patchState, signalStoreFeature, withMethods } from "@ngrx/signals";
import { EntityId, addEntities, withEntities } from "@ngrx/signals/entities";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { Observable, pipe, switchMap } from "rxjs";

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

// Function to handle the success response of loading entities
function handleLoadSuccess<Entity extends { id: EntityId }>(state: StateSignal<object>) {
  return (res: { content: Entity[] }) =>
    patchState(state, addEntities(res.content));
}

// Modular rxMethod function for loading entities
function loadEntitiesMethod<Entity extends { id: EntityId }>(
  loader: (query?: string) => Observable<{ content: Entity[] }>,
  state: StateSignal<object>
) {
  return rxMethod<string>(
    pipe(
      switchMap((query) =>
        loader(query).pipe(
          tapResponse({
            next: handleLoadSuccess<Entity>(state),
            error: () => {
              console.log("error");
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
