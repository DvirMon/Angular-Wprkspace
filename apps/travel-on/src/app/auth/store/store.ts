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
import { AuthEvent, AuthServerError, AuthService, User } from '../utils';
import { register, sendResetEmail, signIn } from './store.helpers';
import { DialogService } from '../../shared/dialog/dialog.service';

export interface AuthState {
  user: User;
  loaded: boolean;
  email: string;
  serverError: AuthServerError | null;
  authError: Partial<Record<AuthEvent, FormServerError>>;
}

const initialState: AuthState = {
  user: {} as User,
  loaded: false,
  email: '',
  serverError: null,
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
  }))
);
