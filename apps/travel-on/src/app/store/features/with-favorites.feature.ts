import { computed, inject } from '@angular/core';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadSlice
} from '@dom';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Favorite, FavoriteHttpService } from '../../favorites';

const SLICE = 'favorite';

type FavoritesLoader = Loader<string, Entity, 'loadFavorites'>;

type FavoriteSelection = { placeId: string; selected: boolean };

export function withFavorites(Loader: LoaderService<FavoritesLoader>) {
  return signalStoreFeature(
    withState<{ favorite: Favorite[] }>({ favorite: [] }),
    withMethods((store) => {
      const loader = createLoader(Loader, 'loadFavorites');
      return {
        loadFavorites: loadSlice(loader, store, SLICE),
      };
    }),
    withMethods((store, service = inject(FavoriteHttpService)) => ({
      async updateFavorite(currentSelection: FavoriteSelection) {
        const data = store.favorite()[0];
        const { vacationIds, id } = data;

        const updatedVacationIds = updateVacationIds(
          currentSelection,
          vacationIds
        );

        const updatedData = { ...data, vacationIds: updatedVacationIds };

        await service.updateFavoriteDoc(id, updatedData);

        patchState(store, (state) => ({
          favorite: { ...state.favorite, vacationIds: updatedVacationIds },
        }));
      },
    })),
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

function updateVacationIds(
  currentSelection: FavoriteSelection,
  vacationIds: string[]
) {
  const { placeId, selected } = currentSelection;

  return selected
    ? [...vacationIds, placeId]
    : vacationIds.filter((id: string) => id !== placeId);
}
