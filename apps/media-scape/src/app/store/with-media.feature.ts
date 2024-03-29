import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { setEntities, setEntity, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, pipe, switchMap } from 'rxjs';
import { MediaService } from '../media';
import { MediaItem, MediaResult } from '../shared/types';

export function withMedia() {
  return signalStoreFeature(
    withState({ totalResults: 0 }),
    withEntities<MediaResult>(),
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
                    setEntities(results.results, { idKey: 'imdbID' })
                  );
                },
                error: () => EMPTY,
              })
            )
          )
        )
      ),
      updateMedia: rxMethod<MediaResult>(
        pipe(
          switchMap((item: MediaResult) =>
            service.updateMedia(item).pipe(
              tapResponse({
                next: (item) =>
                  patchState(store, setEntity(item, { idKey: 'imdbID' })),
                error: () => EMPTY,
              })
            )
          )
        )
      ),
    })),
    withComputed((store) => ({
      menuItems: computed(() => store.entities().reduce(getTypeCounts, [])),
    }))
  );
}

export function getTypeCounts(
  acc: { type: string; count: number }[],
  item: MediaResult
): { type: string; count: number }[] {
  const existingIndex = acc.findIndex((element) => element.type === item.Type);

  if (existingIndex !== -1) {
    ++acc[existingIndex].count;
  } else {
    acc.push({ type: item.Type, count: 1 });
  }

  return acc;
}

export function getMedia(acc: MediaItem[], item: MediaResult): MediaItem[] {
  const existingIndex = acc.findIndex((element) => element.type === item.Type);

  if (existingIndex !== -1) {
    ++acc[existingIndex].count;
    acc[existingIndex].data.push(item);
  } else {
    acc.push({ type: item.Type, count: 1, data: [item] });
  }

  return acc;
}
