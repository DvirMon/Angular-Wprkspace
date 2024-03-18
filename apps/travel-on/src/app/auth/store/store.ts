import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, inject, signal } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { tapResponse } from '@ngrx/operators';
import {
  StateSignal,
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, pipe, switchMap } from 'rxjs';
import {
  AuthEvent,
  AuthServerError,
  AuthService,
  FirebaseError,
  Register,
  SignInEvent,
  User,
  mapFirebaseCredentials,
} from '../utils';
import { setAuthError, setServerError, setUser } from './store.setters';
import { FormServerError } from '../../shared/components';

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
  withMethods((store, service = inject(AuthService)) => ({
    signIn: signIn(service, store, AuthEvent.LOGIN),
    register: register(service, store, AuthEvent.REGISTER),
  })),
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
  }))
);

function signIn(
  service: AuthService,
  store: StateSignal<AuthState>,
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
function register(
  service: AuthService,
  store: StateSignal<AuthState>,
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

function handleLoadUser(store: StateSignal<AuthState>, event: AuthEvent) {
  return tapResponse({
    next: (user: User) => patchState(store, setUser(user)),
    error: (err: FirebaseError) =>
      patchState(store, setAuthError(err.code, event)),
  });
}

function authenticate<T>(
  store: StateSignal<AuthState>,
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
