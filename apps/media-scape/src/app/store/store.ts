import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import { signalStore, withComputed } from '@ngrx/signals';
import { MediaType } from '../shared/types';
import { isTitleOrDate, isTypeEqual, withFilter } from './with-filter.feature';
import { getMedia, getTypeCounts, withMedia } from './with-media.feature';
import { compareTitle, withSort } from './with-sort.feature';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withMedia(),
  withFilter(),
  withSort(),
  withComputed((store) => ({
    media: computed(() =>
      store
        .entities()
        .filter(isTitleOrDate(store.searchTerm()))
        .sort((a, b) => compareTitle(a, b, store.sortDir()))
    ),
    mediaMap: computed(() =>
      store
        .entities()
        .filter(isTitleOrDate(store.searchTerm()))
        .sort((a, b) => compareTitle(a, b, store.sortDir()))
        .reduce(getMedia, [])
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
