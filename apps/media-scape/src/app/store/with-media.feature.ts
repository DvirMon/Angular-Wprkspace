import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
  WritableStateSource,
} from '@ngrx/signals';
import {
  EntityId,
  EntityMap,
  SelectEntityId,
  addEntities,
  setEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, filter, pipe, switchMap, tap } from 'rxjs';
import { MediaHttpService } from '../media';
import { MediaItem, MediaResult, Root } from '../shared/types';
import { withLoaded } from './with-loaded.feature';

interface State {
  totalResults: number;
  isLoaded: boolean;
  entityMap: EntityMap<MediaResult>;
  ids: EntityId[];
}

const selectId: SelectEntityId<MediaResult> = (media) => media.imdbID;

export function withMedia() {
  return signalStoreFeature(
    withState({ totalResults: 0 }),
    withLoaded(),
    withEntities<MediaResult>(),
    withMethods((store, service = inject(MediaHttpService)) => ({
      loadMedia: rxMethod<void>(
        pipe(
          filter(() => !store.isLoaded()),
          switchMap(() =>
            service.loadMedia().pipe(
              tap(() => store.setLoading(true)),
              handleLoadResponse(store)
            )
          )
        )
      ),
      refreshMedia: rxMethod<void>(
        pipe(
          switchMap(() => service.loadMedia().pipe(handleLoadResponse(store)))
        )
      ),
      updateMedia: rxMethod<MediaResult>(
        pipe(
          switchMap((item: MediaResult) =>
            service.updateMedia(item).pipe(handleUpdateResponse(store))
          )
        )
      ),
    })),
    withComputed((store) => ({
      menuItems: computed(() => store.entities().reduce(getTypeCounts, [])),
    }))
  );
}

function handleLoadResponse(store: WritableStateSource<State>) {
  return tapResponse({
    next: (results: Root) => {
      patchState(store, {
        totalResults: Number(results.totalResults),
      });

      patchState(store, addEntities(results.results, { selectId }));
    },
    error: () => EMPTY,
  });
}
function handleUpdateResponse(store: WritableStateSource<State>) {
  return tapResponse({
    next: (item: MediaResult) =>
      patchState(store, setEntity(item, { selectId })),
    error: () => EMPTY,
  });
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
