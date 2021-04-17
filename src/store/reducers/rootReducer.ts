import { combineReducers } from 'redux';

import { authReducer, AuthState } from './authReducer';
import { gateioReducer, GateioState } from './gateioReducer';

export interface RootReducer {
  auth: AuthState;
  gateio: GateioState;
}

export default combineReducers({ auth: authReducer, gateio: gateioReducer });
