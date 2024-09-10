import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectAuth = (state: AppState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (auth): boolean => !!auth.isAuthenticated
);