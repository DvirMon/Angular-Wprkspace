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
import { MediaType, Result, SortDir } from '../shared/types';

interface State {
  totalResults: number;
  sortDir: SortDir;
}

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withState<State>({ totalResults: 0, sortDir: SortDir.ASC }),
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
      store
        .entities()
        .filter(compareType(MediaType.MOVIE))
        .sort((a, b) => compareName(a, b, store.sortDir()))
    ),
    series: computed(() =>
      store.entities().filter(compareType(MediaType.SERIES)).sort(compareName)
    ),
    games: computed(() =>
      store.entities().filter(compareType(MediaType.GAME)).sort(compareName)
    ),
  }))
);

// function compareType(item: Result, value: MediaType) {
//   return item.Type === value;
// }

function compareType(value: MediaType) {
  return function (item: Result): boolean {
    return item.Type === value;
  };
}

function compareName(
  item1: Result,
  item2: Result,
  mode: SortDir = SortDir.ASC
): number {
  const title1 = item1.Title.toUpperCase();
  const title2 = item2.Title.toUpperCase();

  if (mode === SortDir.ASC) {
    if (title1 < title2) {
      return -1;
    }
    if (title1 > title2) {
      return 1;
    }
    return 0;
  } else {
    // descending order
    if (title1 > title2) {
      return -1;
    }
    if (title1 < title2) {
      return 1;
    }
    return 0;
  }
}
