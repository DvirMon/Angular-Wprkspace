import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { AuthEffects } from '../../auth/store/auth.effects';
import { authReducer } from '../../auth/store/auth.reducer';
import { authFeatureKey } from '../../auth/store/auth.state';
import { PlacesEffects } from '../../store/places/places.effects';
import { placesReducer } from '../../store/places/places.reducer';
import { placesFeatureKey } from '../../store/places/places.state';

export function provideNgRx() {
  return [
    provideStore({
      [authFeatureKey]: authReducer,
      [placesFeatureKey]: placesReducer,
      // [favoritesFeatureKey]: favoriteReducer,
    }),
    provideEffects(AuthEffects, PlacesEffects),
    // provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ];
}
