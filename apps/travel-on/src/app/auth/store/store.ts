// import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject, Signal } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AuthEvent, AuthService } from '../utils';
import { initialState } from './auth.state';
import { withAuthMethods } from './with-auth-methods';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withDevtools('auth'),
  withState(initialState),
  withAuthMethods(),
  withMethods((store, service = inject(AuthService)) => ({
    login(): void {
      service.login(store.user());
    },
    logout(): void {
      patchState(store, initialState);
      service.logout();
    },
  })),

  withComputed((store: { [keyof AuthState]: Signal<unknown> }) => ({
    loginError: computed(() => store.authError()[AuthEvent.LOGIN]),
    registerError: computed(() => store.authError()[AuthEvent.REGISTER]),
    resetError: computed(() => store.authError()[AuthEvent.RESET]),
  }))
);
