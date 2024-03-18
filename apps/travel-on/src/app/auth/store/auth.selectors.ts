import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.state';

const selectState = createFeatureSelector<fromAuth.AuthState>(fromAuth.authFeatureKey);

const selectLoaded = createSelector(
  selectState,
  (state: fromAuth.AuthState): boolean => state.loaded
);

const selectUser = createSelector(
  selectState,
  (state: fromAuth.AuthState) => state.user
)

export const selectEmailLink = createSelector(
  selectState,
  (state: fromAuth.AuthState) => state.email
)

export const AuthSelectors = {
  selectLoaded,
  selectUser,
  selectEmailLink,
}
