import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import { signalStore, withComputed } from '@ngrx/signals';
import { MediaItem } from '../shared/types';
import {
  createFilterCriteria,
  isTitleOrDate,
  withFilter,
} from './with-filter.feature';
import { getMedia, withMedia } from './with-media.feature';
import { compareTitle, withSort } from './with-sort.feature';
import { EvaluateFilterService } from 'ng-filters-service/evaluate-filters';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withMedia(),
  withFilter(),
  withSort(),
  withComputed((store, service = inject(EvaluateFilterService)) => ({
    mediaV1: computed(() =>
      store
        .entities()
        // .filter(isTitleOrDate(store.searchTerm()))
        // .filter(service.evaluate(createFilterCriteria(store.searchTerm())))
        .sort((a, b) => compareTitle(a, b, store.sortDir()))
        .reduce(getMedia, [])
    ),
    media: computed(() =>
      store
        .entities()
        .reduce(getMedia, [])
        .map((item: MediaItem) => ({
          ...item,
          data: item.data
            .filter(isTitleOrDate(store.searchTerm()))
            .sort((a, b) => compareTitle(a, b, store.sortDir())),
        }))
    ),
  }))
);
