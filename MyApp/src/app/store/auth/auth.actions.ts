import { createAction, props } from '@ngrx/store';
import firebase from 'firebase/compat/app';

export const login = createAction('[Auth] Login');
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: firebase.User }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());
export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const setUser = createAction('[Auth] Set User', props<{ user: firebase.User | null }>());