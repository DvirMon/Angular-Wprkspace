import { Entity, Loader, LoaderService, createLoader, loadEntities } from '@dom';
import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { Favorite } from '../favorites/favorite.model';


const COLLECTION = 'favorites';

type FavoritesLoader = Loader<string, Entity, 'loadFavorites'>;

export function withFavorites(Loader: LoaderService<FavoritesLoader>) {
  return signalStoreFeature(
    withEntities({ entity : type<Favorite>(), collection : COLLECTION}),
    withMethods((store) => {
      const loader = createLoader(Loader, 'loadFavorites');
      return {
        loadFavorites: loadEntities(loader, store, COLLECTION)
      };
    })
  );
}
