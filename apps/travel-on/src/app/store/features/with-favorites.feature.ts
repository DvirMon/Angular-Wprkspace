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
import { FavoriteHttpService } from '../favorites/favorite.https.ervice';
import { Favorite } from '../favorites/favorite.model';

const SLICE = 'favorite';

type FavoritesLoader = Loader<string, Entity, 'loadFavorites'>;

type FavoriteSelection = { placeId: string; selected: boolean };

export function withFavorites(Loader: LoaderService<FavoritesLoader>) {
  return signalStoreFeature(
    withState<{ favorite: Favorite[] }>({ favorite: [] }),
    withMethods((store, service = inject(FavoriteHttpService)) => {
      const loader = createSliceLoader(Loader, 'loadFavorites');
      return {
        loadFavorites: loadSlice(loader, store, SLICE),
        updateFavorite: (currentSelection: FavoriteSelection) => {
          const { placeId, selected } = currentSelection;
          const { vacationIds } = store.favorite()[0];

          if (selected) {
            addPlaceIdToVacationIds(placeId, vacationIds);
          } else {
            removePlaceIdFromVacationIds(placeId, vacationIds);
          }

          patchState(store, (state) => ({
            favorite: { ...state.favorite, vacationIds },
          }));
        },
      };
    }),
    withComputed(({ favorite }) => ({
      favoriteMap: computed(() => mapVacationIdsToRecord(favorite()[0])),
    }))
  );
}

function mapVacationIdsToRecord(favorite: Favorite): Record<string, boolean> {
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

// Function to add a placeId to vacationIds if selected
function addPlaceIdToVacationIds(placeId: string, vacationIds: string[]) {
  vacationIds.push(placeId);
}

// Function to remove a placeId from vacationIds if deselected
function removePlaceIdFromVacationIds(placeId: string, vacationIds: string[]) {
  const index = vacationIds.indexOf(placeId);
  if (index !== -1) {
    vacationIds.splice(index, 1);
  }
}
