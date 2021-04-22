import { BalanceState } from '../reducers/balanceReducer';

export const getStartingBalance = (state: BalanceState) =>
  state.startingBalance;
export const getStartingBalancePending = (state: BalanceState) =>
  state.startingBalancePending;
export const getStartingBalanceError = (state: BalanceState) =>
  state.startingBalanceError;
