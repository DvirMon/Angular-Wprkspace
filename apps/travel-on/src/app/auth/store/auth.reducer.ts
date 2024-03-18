import { createReducer, on } from '@ngrx/store';
import { mapAuthServerError } from '../utils/auth.helpers';
import { AuthActions } from './auth.actions';
import { AuthState, initialState } from './auth.state';

export const authReducer = createReducer(
  initialState,

  on(
    AuthActions.loadUserSuccess,
    (state, action): AuthState => ({
      ...state,
      user: {
        ...action.user,
      },
      loaded: true,
    })
  ),

  on(AuthActions.loadUserFailure, (state, action) => ({
    ...state,
    serverError: mapAuthServerError(action.code, action.event),
  })),

  on(AuthActions.sendResetEmailFailure, (state, action) => ({
    ...state,
    serverError: mapAuthServerError(action.code, action.event),
  })),

  on(
    AuthActions.sendEmailLinkSuccess,
    (state, action): AuthState => ({
      ...state,
      email: action.email,
    })
  ),

  on(
    AuthActions.logout,
    (): AuthState => ({
      ...initialState,
    })
  )
);
