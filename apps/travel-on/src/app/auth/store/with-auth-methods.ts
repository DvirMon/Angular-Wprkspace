import { inject } from '@angular/core';
import {
  signalStoreFeature,
  withMethods,
  WritableStateSource,
} from '@ngrx/signals';
import { DialogService } from '../../shared/dialog/dialog.service';
import { AuthService, AuthEvent } from '../utils';
import {
  signIn,
  register,
  sendResetEmail,
  confirmPasswordReset,
  loadUserById,
} from './store.helpers';
import { AuthState } from './auth.state';

export function withAuthMethods() {
  return signalStoreFeature(
    withMethods(
      (
        store,
        service = inject(AuthService),
        dialog = inject(DialogService)
      ) => ({
        signIn: signIn(
          service,
          store as WritableStateSource<AuthState>,
          AuthEvent.LOGIN
        ),
        register: register(
          service,
          store as WritableStateSource<AuthState>,
          AuthEvent.REGISTER
        ),
        sendResetEmail: sendResetEmail(
          store as WritableStateSource<AuthState>,
          AuthEvent.RESET,
          service,
          dialog
        ),
        confirmPasswordReset: confirmPasswordReset(
          store as WritableStateSource<AuthState>,
          AuthEvent.RESET,
          service,
          dialog
        ),
        loadUserById: loadUserById(
          service,
          store as WritableStateSource<AuthState>,
          AuthEvent.LOGIN
        ),
      })
    )
  );
}
