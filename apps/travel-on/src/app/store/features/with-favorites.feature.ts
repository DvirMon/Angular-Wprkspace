import { computed } from '@angular/core';
import {
  Entity,
  Loader,
  LoaderService,
  createSliceLoader,
  loadSlice,
} from '@dom';
import {
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Favorite } from '../favorites/favorite.model';

const SLICE = 'favorite';

type FavoritesLoader = Loader<string, Entity, 'loadFavorites'>;

export function withFavorites(Loader: LoaderService<FavoritesLoader>) {
  return signalStoreFeature(
    withState({ favorite: [] }),
    withMethods((store) => {
      const loader = createSliceLoader(Loader, 'loadFavorites');
      return {
        loadFavorites: loadSlice(loader, store, SLICE),
      };
    }),
    withComputed(({ favorite }) => ({
      favoriteMap: computed(() => mapIds(favorite()[0])),
    }))
  );
}

function mapIds(favorite: Favorite) {
  if (favorite) {
    return favorite.vacationIds.reduce((acc, value) => {
      return {
        ...acc,
        [value]: true,
      };
    }, {} as Record<string, boolean>);
  } else {
    return {};
  }
}
