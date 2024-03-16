import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks } from '@ngrx/signals';
import { withPlaces } from './features/with-places.feature';

export const PlacesStore = signalStore(
  { providedIn: 'root' },
  withDevtools('places'),
  withPlaces(),
  withHooks((store) => ({
    onInit() {
      store.loadPlaces();
    },
  }))
);
