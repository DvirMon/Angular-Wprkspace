import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  EMPTY,
  catchError,
  concatMap,
  map,
  of,
  switchMap,
  tap
} from 'rxjs';

import { DialogService } from '../../shared/dialog/dialog.service';
import { AuthDialogEvent, authDialogMap } from '../auth-dialogs';
import { ResetService } from '../auth-forms';
import { mapFirebaseCredentials } from '../utils/auth.helpers';
import { AuthEvent, Register } from '../utils/auth.model';
import { AuthService } from '../utils/auth.service';
import { FirebaseError } from '../utils/fireauth.service';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private resetService: ResetService,
    private router: Router,
    private dialogService: DialogService
  ) {}


  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.createUser),
      concatMap(({ email, password }) =>
        this.authService.register$({email, password} as Register).pipe(
          mapFirebaseCredentials(),
          map((user) => AuthActions.loadUserSuccess({ user })),
          catchError((err: FirebaseError) => {
            return of(
              AuthActions.loadUserFailure({
                code: err.code,
                event: AuthEvent.REGISTER,
              })
            );
          })
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUser),
      switchMap(({ userId }) =>
        this.authService.getUserById(userId).pipe(
          map((user) => AuthActions.loadUserSuccess({ user })),
          catchError(() => {
            return EMPTY;
          })
        )
      )
    )
  );

  sendResetEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.sendResetEmail),
      switchMap(({ email }) =>
        this.resetService.sendResetEmail(email).pipe(
          map(() =>
            AuthActions.sendResetEmailSuccess({
              email,
              event: AuthDialogEvent.CONFIRM_EMAIL,
            })
          ),
          catchError((err: FirebaseError) => {
            return of(
              AuthActions.sendResetEmailFailure({
                code: err.code,
                event: AuthEvent.RESET,
              })
            );
          })
        )
      )
    )
  );

  confirmResetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.confirmResetPassword),
      switchMap(({ oobCode, newPassword }) =>
        this.resetService.confirmPasswordReset(oobCode, newPassword).pipe(
          // of('eil').pipe(
          map(() =>
            AuthActions.confirmResetPasswordSuccess({
              email: 'test',
              event: AuthDialogEvent.RESET_PASSWORD,
            })
          ),
          catchError((err: FirebaseError) => {
            return of(
              AuthActions.sendResetEmailFailure({
                code: err.code,
                event: AuthEvent.RESET,
              })
            );
          })
        )
      )
    )
  );

  authDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AuthActions.confirmResetPasswordSuccess,
          AuthActions.sendResetEmailSuccess
        ),
        tap(({ email, event }) =>
          this.dialogService.openDialog(authDialogMap[event], {
            email,
            event,
          })
        )
      ),
    { dispatch: false }
  );

}
