import { computed } from '@angular/core';
import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { AuthEvent } from '../utils';
import { AuthState } from './auth.state';

export function withAuthComputed<_>() {
  return signalStoreFeature(
    { state: type<AuthState>() },
    withComputed(({ authError }) => ({
      loginError: computed(() => authError()[AuthEvent.LOGIN]),
      registerError: computed(() => authError()[AuthEvent.REGISTER]),
      resetError: computed(() => authError()[AuthEvent.RESET]),
    }))
  );
}
