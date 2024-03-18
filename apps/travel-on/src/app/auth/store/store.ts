import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { FormServerError } from '../../shared/components';
import { DialogService } from '../../shared/dialog/dialog.service';
import { AuthEvent, AuthService, User } from '../utils';
import {
  confirmPasswordReset,
  loadUserById,
  register,
  sendResetEmail,
  signIn,
} from './store.helpers';

export interface AuthState {
  user: User;
  loaded: boolean;
  email: string;
  authError: Partial<Record<AuthEvent, FormServerError>>;
}

const initialState: AuthState = {
  user: {} as User,
  loaded: false,
  email: '',
  authError: {} as Record<AuthEvent, FormServerError>,
};

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
