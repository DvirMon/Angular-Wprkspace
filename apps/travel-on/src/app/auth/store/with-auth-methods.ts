import { inject } from '@angular/core';
import {
    patchState,
    signalStoreFeature,
    type,
    withMethods
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

export function withAuthMethods<_>() {
  return signalStoreFeature(
    { state: type<AuthState>() },
    withMethods(
      (
        store,
        service = inject(AuthService),
        dialog = inject(DialogService)
      ) => ({
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
    }))
  );
}
