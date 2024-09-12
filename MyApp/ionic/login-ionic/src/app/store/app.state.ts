import { AuthState } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
  // ... other state slices ...
}