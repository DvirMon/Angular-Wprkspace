import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { MediaType, Result } from '../shared/types';

export function withFilter() {
  return signalStoreFeature(
    withState({ searchTerm: '' }),
    withMethods((store) => ({
      updateSearchTerm(value: string) {
        patchState(store, { searchTerm: value });
      },
    }))
  );
}

export function isTitleOrDate(value: string): (item: Result) => boolean {
  return function (item: Result): boolean {
    return isTitleInclude(item, value) || isYearInclude(item, value);
  };
}

function isTitleInclude(item: Result, value: string): boolean {
  return item.Title.toLowerCase().includes(value.toLowerCase());
}

function isYearInclude(item: Result, value: string): boolean {
  return item.Year.substring(0, 4).includes(value);
}

export function isTypeEqual(value: MediaType) {
  return function (item: Result): boolean {
    return item.Type === value;
  };
}
