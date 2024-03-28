import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, pipe, switchMap } from 'rxjs';
import { MediaService } from '../media/media.service';
import { MediaType, Result } from '../shared/types';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
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
    movies: computed(() =>
      store.entities().filter((item) => compareType(item, MediaType.MOVIE))
    ),
    series: computed(() =>
      store.entities().filter((item) => compareType(item, MediaType.SERIES))
    ),
    games: computed(() =>
      store.entities().filter((item) => compareType(item, MediaType.GAME))
    ),
  }))
);

function compareType(item: Result, value: MediaType) {
  return item.Type === value;
}
