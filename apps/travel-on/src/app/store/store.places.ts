import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withHooks } from '@ngrx/signals';
import { withPlaces } from './features/with-places.feature';
import { PlacesService } from '../places/places.service';

export const PlacesStore = signalStore(
  { providedIn: 'root' },
  withDevtools('places'),
  withPlaces(PlacesService),
  withHooks((store) => ({
    onInit() {
      store.loadPlaces();
    },
  }))
);
