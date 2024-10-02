import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { MediaType, MediaResult } from '../shared/types';
import {
  FilterCriteria,
  FilterOperation,
} from 'ng-filters-service/filters.types';

interface FilterState {
  searchTerm: string;
  type: MediaType;
}

const initialState: FilterState = { searchTerm: '', type: MediaType.ALL };

export function withFilter() {
  return signalStoreFeature(
    withState(initialState),
    withMethods((store) => ({
      updateSearchTerm(value: string) {
        patchState(store, { searchTerm: value });
      },
      updateType(value: MediaType) {
        patchState(store, { type: value });
      },
      clearFilters() {
        patchState(store, initialState);
      },
    }))
  );
}

export function createFilterCriteria(
  searchTerm: string
): FilterCriteria<MediaResult>[] {
  return [
    { key: 'Title', value: searchTerm, operation: FilterOperation.CONTAINS },
    {
      key: 'Year',
      value: searchTerm,
      operation: FilterOperation.CONTAINS,
      preprocess: (value: unknown) => (value as string).substring(0, 4),
    },
  ];
}

export function isTitleOrDate(value: string): (item: MediaResult) => boolean {
  return function (item: MediaResult): boolean {
    return isTitleInclude(item, value) || isYearInclude(item, value);
  };
}

function isTitleInclude(item: MediaResult, value: string): boolean {
  return item.Title.toLowerCase().includes(value.toLowerCase());
}

function isYearInclude(item: MediaResult, value: string): boolean {
  return item.Year.substring(0, 4).includes(value);
}

export function isTypeEqual(value: MediaType) {
  return function (item: MediaResult): boolean {
    return item.Type === value;
  };
}
