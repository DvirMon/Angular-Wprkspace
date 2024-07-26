// import { withDevtools } from '@angular-architects/ngrx-toolkit';
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
import { UserService } from '../utils/user.service';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  // withDevtools('auth'),
  withState(initialState),
  withMethods(
    (
      store,
      authService = inject(AuthService),
      userService = inject(UserService),
      dialogService = inject(DialogService)
    ) => ({
      signIn: signIn(authService, store, AuthEvent.LOGIN),
      register: register(authService, store, AuthEvent.REGISTER),
      sendResetEmail: sendResetEmail(
        store,
        AuthEvent.RESET,
        authService,
        dialogService
      ),
      confirmPasswordReset: confirmPasswordReset(
        store,
        AuthEvent.RESET,
        authService,
        dialogService
      ),
      loadUserById: loadUserById(userService, store, AuthEvent.LOGIN),
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
