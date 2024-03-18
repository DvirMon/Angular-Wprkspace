import { provideStore } from '@ngrx/store';

// import { AuthEffects } from '../../auth/store/auth.effects';
import { authReducer } from '../../auth/store/auth.reducer';
import { authFeatureKey } from '../../auth/store/auth.state';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from '../../auth/store/auth.effects';

export function provideNgRx() {
  return [
    provideStore({
      [authFeatureKey]: authReducer,
    }),
    // provideEffects(AuthEffects),
  ];
}
