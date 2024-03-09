import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';
import { FavoriteEntity } from '../features/weather-favorite-card/favorite-card.component';

export const FavoriteStore = signalStore(
  { providedIn: 'root' },
  withDevtools('favorites'),
  withEntities<FavoriteEntity>(),
  withMethods((state) => ({
    addFavorite(item: FavoriteEntity) {
      patchState(state, addEntity(item));
    },
  })),
  withComputed((state) => ({
    hasFavorites: computed(() => !!state.entityMap),
  }))
);
