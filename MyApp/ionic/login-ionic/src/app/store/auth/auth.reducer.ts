import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import firebase from 'firebase/compat/app';

export interface AuthState {
  user: firebase.User | null;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, loading: false, error: null })),

  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.logout, state => ({ ...state, loading: true })),
  on(AuthActions.logoutSuccess, state => ({ ...state, user: null, loading: false })),

  on(AuthActions.setUser, (state, { user }) => ({ ...state, user }))
);