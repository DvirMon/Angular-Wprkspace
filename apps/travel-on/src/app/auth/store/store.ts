import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  StateSignal,
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, pipe, switchMap } from 'rxjs';
import {
  AuthEvent,
  AuthServerError,
  AuthService,
  FirebaseError,
  SignInEvent,
  User,
  mapFirebaseCredentials,
} from '../utils';
import { setServerError, setUser } from './store.setters';
import { clearStorage } from '../../shared/helpers';

export interface AuthState {
  user: User;
  loaded: boolean;
  email: string;
  serverError: AuthServerError | null;
}

const initialState: AuthState = {
  user: {} as User,
  loaded: false,
  email: '',
  serverError: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withDevtools('auth'),
  withState(initialState),
  withMethods((store, service = inject(AuthService)) => ({
    signIn: loadUser(service, store, AuthEvent.LOGIN),

    login(): void {
      service.login(store.user());
    },
    logout(): void {
      patchState(store, initialState);
      service.logout();
    },
  }))
);

function loadUser(
  service: AuthService,
  store: StateSignal<AuthState>,
  event: AuthEvent
) {
  return rxMethod<SignInEvent>(
    pipe(
      switchMap((value) =>
        service.signIn$(value).pipe(
          mapFirebaseCredentials(),
          tapResponse({
            next: (user: User) => patchState(store, setUser(user)),
            error: (err: FirebaseError) =>
              patchState(store, setServerError(err.code, event)),
          })
        )
      )
    )
  );
}
