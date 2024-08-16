import { UserCredential } from '@angular/fire/auth';
import { tapResponse } from '@ngrx/operators';
import { patchState, WritableStateSource } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, pipe, switchMap } from 'rxjs';
import { LoginService } from '../../pages/login/login.service';
import { RegisterService } from '../../pages/register/register.service';
import { ResetService } from '../../pages/reset/reset.service';
import { DialogService } from '../../shared/dialog/dialog.service';
import { AuthDialogEvent, authDialogMap } from '../auth-dialogs';
import {
  AuthEvent,
  FirebaseError,
  mapFirebaseCredentials,
  Register,
  SignInEvent,
  User,
} from '../utils';
import { UserService } from '../utils/user.service';
import { AuthState } from './auth.state';
import { setAuthError, setUser } from './store.setters';

export function signIn(
  service: LoginService,
  store: WritableStateSource<AuthState>,
  event: AuthEvent
) {
  return rxMethod<SignInEvent>(
    pipe(
      switchMap((value) =>
        service
          .signIn$(value)
          .pipe(mapFirebaseCredentials(), handleLoadUser(store, event))
      )
    )
  );
}
export function register(
  service: RegisterService,
  store: WritableStateSource<AuthState>,
  event: AuthEvent
) {
  return rxMethod<Register>(
    pipe(
      switchMap((value) =>
        service
          .register$(value)
          .pipe(mapFirebaseCredentials(), handleLoadUser(store, event))
      )
    )
  );
}
export function loadUserById(
  service: UserService,
  store: WritableStateSource<AuthState>,
  event: AuthEvent
) {
  return rxMethod<string>(
    pipe(
      switchMap((userId) =>
        service.loadUserById$(userId).pipe(handleLoadUser(store, event))
      )
    )
  );
}

export function handleLoadUser(
  store: WritableStateSource<AuthState>,
  event: AuthEvent
) {
  return tapResponse({
    next: (user: User) => patchState(store, setUser(user)),
    error: (err: FirebaseError) =>
      patchState(store, setAuthError(err.code, event)),
  });
}

export function sendResetEmail(
  store: WritableStateSource<AuthState>,
  authEvent: AuthEvent,
  service: ResetService,
  dialog: DialogService
) {
  return rxMethod<{ email: string; event: AuthDialogEvent }>(
    pipe(
      switchMap(({ email, event }) =>
        service.sendResetEmail$(email).pipe(
          tapResponse({
            next: () =>
              dialog.openDialog(authDialogMap[event], { email, event }),
            error: (err: FirebaseError) =>
              patchState(store, setAuthError(err.code, authEvent)),
          })
        )
      )
    )
  );
}
export function confirmPasswordReset(
  store: WritableStateSource<AuthState>,
  authEvent: AuthEvent,
  service: ResetService,
  dialog: DialogService
) {
  return rxMethod<{
    newPassword: string;
    oobCode: string;
    event: AuthDialogEvent;
  }>(
    pipe(
      switchMap(({ newPassword, oobCode, event }) =>
        service.confirmPasswordReset$({ newPassword, oobCode }).pipe(
          tapResponse({
            next: () =>
              dialog.openDialog(authDialogMap[event], { email: '', event }),
            error: (err: FirebaseError) =>
              patchState(store, setAuthError(err.code, authEvent)),
          })
        )
      )
    )
  );
}

export function authenticate<T>(
  store: WritableStateSource<AuthState>,
  event: AuthEvent,
  authActionFn: (value: T) => Observable<UserCredential>
) {
  return rxMethod<T>(
    pipe(
      switchMap((value) =>
        authActionFn(value).pipe(
          mapFirebaseCredentials(),
          handleLoadUser(store, event)
        )
      )
    )
  );
}
