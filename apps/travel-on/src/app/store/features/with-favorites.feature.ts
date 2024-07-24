import { computed, inject } from '@angular/core';
import {
  Entity,
  EntityLoader,
  LoaderService,
  createLoader,
  loadSlice,
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

type FavoritesLoader = EntityLoader<string, Entity, 'loadFavorites'>;

type FavoriteSelection = { placeId: string; selected: boolean };

export function withFavorites(Loader: LoaderService<FavoritesLoader>) {
  return signalStoreFeature(
    withState<{ favorite: Favorite }>({ favorite: {} as Favorite }),
    withMethods((store) => {
      const loader = createLoader(Loader, 'loadFavorites');
      return {
        loadFavorites: loadSlice(loader, store, SLICE),
      };
    }),
    withMethods((store, service = inject(FavoriteHttpService)) => ({
      async updateFavorite(currentSelection: FavoriteSelection) {
        const data = store.favorite();
        const { vacationIds, id } = data;

        const updatedVacationIds = updateVacationIds(
          currentSelection,
          vacationIds
        );

        const updatedData = {
          ...data,
          vacationIds: [...updatedVacationIds],
        } as Favorite;


        await service.updateFavoriteDoc(id, updatedData);

        patchState(store, (state) => ({
          favorite: { ...state.favorite, ...updatedData },
        }));
      },
    })),
    withComputed(({ favorite }) => ({
      favoriteMap: computed(() => mapVacationIdsToRecord(favorite())),
    }))
  );
}

function mapVacationIdsToRecord(favorite: Favorite): Record<string, boolean> {
  

  if (!isObjectEmpty(favorite)) {
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
): string[] {
  const { placeId, selected } = currentSelection;

  return selected
    ? [...vacationIds, placeId]
    : vacationIds.filter((id: string) => id !== placeId);
}

function isObjectEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}
