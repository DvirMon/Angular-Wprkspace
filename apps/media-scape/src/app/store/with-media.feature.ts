import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, pipe, switchMap } from 'rxjs';
import { MediaService } from '../media';
import { Result } from '../shared/types';

export function withMedia() {
  return signalStoreFeature(
    withState({ totalResults: 0 }),
    withEntities<Result>(),
    withMethods((store, service = inject(MediaService)) => ({
      loadMedia: rxMethod<void>(
        pipe(
          switchMap(() =>
            service.loadMedia().pipe(
              tapResponse({
                next: (results) => {
                  patchState(store, {
                    totalResults: Number(results.totalResults),
                  });

                  patchState(
                    store,
                    addEntities(results.results, { idKey: 'imdbID' })
                  );
                },
                error: () => EMPTY,
              })
            )
          )
        )
      ),
    })),
    withComputed((store) => ({
      menuMap: computed(() => getTypeCounts(store.entities())),
    }))
  );
}

function getTypeCounts(entities: Result[]) {
  
  const typeCounts = entities.reduce((acc, item) => {
    const key = item.Type;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.keys(typeCounts).map((type) => ({
    label: type,
    amount: typeCounts[type],
  }));
}
