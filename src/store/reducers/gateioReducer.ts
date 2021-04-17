import {
  GET_GATEIO_ACCOUNTS,
  GET_GATEIO_ACCOUNTS_ERROR,
  GET_GATEIO_ACCOUNTS_SUCCESS,
} from '../actions/gateioActions';

export interface GateioState {
  accountsList: any[];
  accountsPending: boolean;
  accountsError: string;
}

const initialState: GateioState = {
  accountsPending: false,
  accountsList: [],
  accountsError: '',
};

export const gateioReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case GET_GATEIO_ACCOUNTS:
      console.log(action);
      return {
        ...state,
        accountsPending: true,
      };
    case GET_GATEIO_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accountsList: action.payload,
        accountsPending: false,
      };
    case GET_GATEIO_ACCOUNTS_ERROR:
      return {
        ...state,
        error: action.payload,
        accountsPending: false,
      };
    default:
      return state;
  }
};

export const getAccounts = (state: GateioState) => state.accountsList;
export const getAccountsPending = (state: GateioState) => state.accountsPending;
export const getAuthError = (state: GateioState) => state.accountsError;
