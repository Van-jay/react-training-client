import { Account } from '../../models/accounts';
import {
  GET_GATEIO_ACCOUNTS,
  GET_GATEIO_ACCOUNTS_ERROR,
  GET_GATEIO_ACCOUNTS_SUCCESS,
} from '../actions/gateioActions';

export interface GateioState {
  accountsList: Account[];
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
      action;
      return {
        ...state,
        accountsPending: true,
        accountsError: '',
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
        accountsError: action.payload,
        accountsPending: false,
      };
    default:
      return state;
  }
};
