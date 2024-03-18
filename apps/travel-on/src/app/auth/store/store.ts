import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { DialogService } from '../../shared/dialog/dialog.service';
import { AuthEvent, AuthService } from '../utils';
import {
  confirmPasswordReset,
  loadUserById,
  register,
  sendResetEmail,
  signIn,
} from './store.helpers';
import { initialState } from './auth.state';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withDevtools('auth'),
  withState(initialState),
  withMethods(
    (store, service = inject(AuthService), dialog = inject(DialogService)) => ({
      signIn: signIn(service, store, AuthEvent.LOGIN),
      register: register(service, store, AuthEvent.REGISTER),
      sendResetEmail: sendResetEmail(store, AuthEvent.RESET, service, dialog),
      confirmPasswordReset: confirmPasswordReset(
        store,
        AuthEvent.RESET,
        service,
        dialog
      ),
      loadUserById: loadUserById(service, store, AuthEvent.LOGIN),
    })
  ),
  withMethods((store, service = inject(AuthService)) => ({
    login(): void {
      service.login(store.user());
    },
    logout(): void {
      patchState(store, initialState);
      service.logout();
    },
  })),

  withComputed((store) => ({
    loginError: computed(() => store.authError()[AuthEvent.LOGIN]),
    registerError: computed(() => store.authError()[AuthEvent.REGISTER]),
    resetError: computed(() => store.authError()[AuthEvent.RESET]),
  }))
);
