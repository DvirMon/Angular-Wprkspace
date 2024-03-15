import { signalStoreFeature, type } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { FavoriteEntity } from '../features/weather-favorite-card/favorite-card.component';

const COLLECTION = 'favorites';

export function withFavorites() {
  return signalStoreFeature(
    withEntities({
      entity: type<FavoriteEntity>(),
      collection: COLLECTION,
    })
  );
}
