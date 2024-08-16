import { inject } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { DialogService } from '../../shared/dialog/dialog.service';
import { AuthEvent, AuthService } from '../utils';
import { AuthState, initialState } from './auth.state';
import {
  confirmPasswordReset,
  loadUserById,
  register,
  sendResetEmail,
  signIn,
} from './store.helpers';
import { UserService } from '../utils/user.service';

export function withAuthMethods<_>() {
  return signalStoreFeature(
    { state: type<AuthState>() },
    withMethods(
      (
        store,
        authService = inject(AuthService),
        userService = inject(UserService),

        dialog = inject(DialogService)
      ) => ({
        signIn: signIn(authService, store, AuthEvent.LOGIN),
        register: register(authService, store, AuthEvent.REGISTER),
        sendResetEmail: sendResetEmail(
          store,
          AuthEvent.RESET,
          authService,
          dialog
        ),
        confirmPasswordReset: confirmPasswordReset(
          store,
          AuthEvent.RESET,
          authService,
          dialog
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
    }))
  );
}
