import { computed } from '@angular/core';
import {
  signalStoreFeature,
  withComputed
} from '@ngrx/signals';
import { AuthEvent } from '../utils';

export function withAuthComputed() {
  return signalStoreFeature(
    withComputed((store) => ({
      loginError: computed(() => store.authError()[AuthEvent.LOGIN]),
      registerError: computed(() => store.authError()[AuthEvent.REGISTER]),
      resetError: computed(() => store.authError()[AuthEvent.RESET]),
    }))
  );
}
