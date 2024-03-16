import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks } from '@ngrx/signals';
import { PlacesService } from '../places/places.service';
import { withPlaces } from './features/with-places.feature';
import { FavoriteHttpService } from './favorites/favorite.https.ervice';
import { withFavorites } from './features/with-favorites.feature';

export const SignalStore = signalStore(
  { providedIn: 'root' },
  withDevtools('store'),
  withPlaces(PlacesService),
  withFavorites(FavoriteHttpService),
  withHooks((store) => ({
    onInit() {
      store.loadPlaces();
    },
  }))
);
