import { combineReducers } from 'redux';

import { authReducer, AuthState } from './authReducer';
import { balanceReducer, BalanceState } from './balanceReducer';
import { gateioReducer, GateioState } from './gateioReducer';

export interface RootReducer {
  auth: AuthState;
  gateio: GateioState;
  balance: BalanceState;
}

export default combineReducers({
  auth: authReducer,
  gateio: gateioReducer,
  balance: balanceReducer,
});
