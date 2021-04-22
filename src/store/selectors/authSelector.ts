import { AuthState } from '../reducers/authReducer';

export const getAuthToken = (state: AuthState) => state.authToken;
export const getAuthPending = (state: AuthState) => state.authPending;
export const getAuthError = (state: AuthState) => state.authError;
