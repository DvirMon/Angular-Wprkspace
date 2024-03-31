import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { MediaResult, SortDir } from '../shared/types';

export function withSort() {
  return signalStoreFeature(
    withState({ sortDir: SortDir.ASC }),
    withMethods((store) => ({
      updateSort() {
        const sortDir = store.sortDir() ^ SortDir.ASC ^ SortDir.DESC;
        patchState(store, { sortDir });
      },
    }))
  );
}

export function compareTitle(
  item1: MediaResult,
  item2: MediaResult,
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
