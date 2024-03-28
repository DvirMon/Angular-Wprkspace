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
import { isTypeEqual, compareTitle, isTitleOrDate } from './helper';

interface State {
  totalResults: number;
  sortDir: SortDir;
  searchTerm: string;
}

const initialState: State = {
  totalResults: 0,
  sortDir: SortDir.ASC,
  searchTerm: '',
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withState<State>(initialState),
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
    updateSort() {
      const sortDir = store.sortDir() ^ SortDir.ASC ^ SortDir.DESC;
      patchState(store, { sortDir });
    },
    updateSearchTerm(value: string) {
      patchState(store, { searchTerm: value });
    },
  })),
  withComputed((store) => ({
    media: computed(() =>
      store
        .entities()
        .filter(isTitleOrDate(store.searchTerm()))
        .sort((a, b) => compareTitle(a, b, store.sortDir()))
    ),
    movies: computed(() =>
      store
        .entities()
        .filter(isTypeEqual(MediaType.MOVIE))
        .filter(isTitleOrDate(store.searchTerm()))
        .sort((a, b) => compareTitle(a, b, store.sortDir()))
    ),
    series: computed(() =>
      store
        .entities()
        .filter(isTypeEqual(MediaType.SERIES))
        .filter(isTitleOrDate(store.searchTerm()))
        .sort(compareTitle)
    ),
    games: computed(() =>
      store
        .entities()
        .filter(isTypeEqual(MediaType.GAME))
        .filter(isTitleOrDate(store.searchTerm()))
        .sort(compareTitle)
    ),
  }))
);
