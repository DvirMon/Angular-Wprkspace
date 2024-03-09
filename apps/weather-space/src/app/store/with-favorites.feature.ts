import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { FavoriteEntity } from '../features/weather-favorite-card/favorite-card.component';
import {
  Entity,
  Loader,
  LoaderService,
  createLoader,
  loadEntities,
} from './entities.helpers';

type OptionLoader = Loader<string, Entity, 'loadFavorites'>;

export function withFavorites(
  Loader: LoaderService<OptionLoader>,
  collection: string
) {
  return signalStoreFeature(
    withEntities({
      entity: type<FavoriteEntity>(),
      collection: 'favorites',
    }),
    withMethods((state) => {
      const loader = createLoader(Loader, 'loadFavorites');
      return {
        loadFavorites: loadEntities(loader, state, collection),
      };
    })
  );
}
