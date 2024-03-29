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
import { MediaResult } from '../shared/types';

export function withMedia() {
  return signalStoreFeature(
    withState({ totalMediaResults: 0 }),
    withEntities<MediaResult>(),
    withMethods((store, service = inject(MediaService)) => ({
      loadMedia: rxMethod<void>(
        pipe(
          switchMap(() =>
            service.loadMedia().pipe(
              tapResponse({
                next: (MediaResults) => {
                  patchState(store, {
                    totalMediaResults: Number(MediaResults.totalMediaResults),
                  });

                  patchState(
                    store,
                    addEntities(MediaResults.MediaResults, { idKey: 'imdbID' })
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
      menuItems: computed(() => getTypeCounts(store.entities())),
    }))
  );
}

function getTypeCounts(entities: MediaResult[]) {
  const typeCounts = entities.reduce((acc, item) => {
    const key = item.Type;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.keys(typeCounts).map((type) => ({
    type,
    amount: typeCounts[type],
  }));
}
