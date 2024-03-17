import { computed, inject } from '@angular/core';
import {
  Entity,
  Loader,
  LoaderService,
  createSliceLoader,
  loadSlice,
} from '@dom';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Favorite } from '../favorites/favorite.model';
import { FavoriteHttpService } from '../favorites/favorite.https.ervice';

const SLICE = 'favorite';

type FavoritesLoader = Loader<string, Entity, 'loadFavorites'>;

type FavoriteSelection = { placeId: string; selected: boolean };

export function withFavorites(Loader: LoaderService<FavoritesLoader>) {
  return signalStoreFeature(
    withState({ favorite: [] }),
    withMethods((store, service = inject(FavoriteHttpService)) => {
      const loader = createSliceLoader(Loader, 'loadFavorites');
      return {
        loadFavorites: loadSlice(loader, store, SLICE),
        updateFavorite: (
          currentSelection: FavoriteSelection,
        ) => {
          // const vacationIds = updateFavoriteMap(currentSelection);

          // patchState(store, (state) => ({
          //   favorite: { ...state.favorite, vacationIds },
          // }));
        },
      };
    }),
    withComputed(({ favorite }) => ({
      favoriteMap: computed(() => mapIds(favorite()[0])),
    }))
  );
}

function mapIds(favorite: Favorite) {
  if (favorite) {
    return favorite.vacationIds.reduce((acc, value, index) => {
      return {
        ...acc,
        [value]: index,
      };
    }, {} as Record<string, number>);
  } else {
    return {};
  }
}

function updateFavoriteMap(
  currentSelection: FavoriteSelection,
  favoriteMap: Record<string, boolean>
) {
  const { placeId, selected } = currentSelection;
  let newSelection = { ...favoriteMap };

  if (selected) {
    newSelection = {
      ...favoriteMap,
      [placeId]: selected,
    };
  } else {
    delete newSelection[placeId];
  }

  console.log(newSelection);

  return Object.keys(newSelection);
}
