import { GateioState } from '../reducers/gateioReducer';

export const getGateioAccounts = (state: GateioState) => state.accountsList;
export const getGateioAccountsPending = (state: GateioState) =>
  state.accountsPending;
export const getGateioAccountsError = (state: GateioState) =>
  state.accountsError;
