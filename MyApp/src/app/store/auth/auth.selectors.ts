import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from './auth.reducer';

export const selectAuth = (state: AppState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (auth: AuthState): boolean => !!auth.user
);