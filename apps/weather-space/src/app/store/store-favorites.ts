import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import { addEntity, removeEntity, withEntities } from '@ngrx/signals/entities';
import { FavoriteEntity } from '../weather/weather-favorite-card/favorite-card.component';

export const FavoriteStore = signalStore(
  { providedIn: 'root' },
  withDevtools('favorites'),
  withEntities<FavoriteEntity>(),
  withMethods((state) => ({
    addFavorite(item: FavoriteEntity) {
      patchState(state, addEntity(item));
    },
    removeFavorite(item: FavoriteEntity) {
      patchState(state, removeEntity(item.id));
    },
  })),
  withComputed((state) => ({
    hasFavorites: computed(() => !!state.entityMap),
  }))
);
