import {
  EDIT_STARTING_BALANCE,
  EDIT_STARTING_BALANCE_ERROR,
  EDIT_STARTING_BALANCE_SUCCESS,
  GET_STARTING_BALANCE,
  GET_STARTING_BALANCE_ERROR,
  GET_STARTING_BALANCE_SUCCESS,
} from '../actions/balanceActions';

export interface BalanceState {
  startingBalance: number;
  startingBalancePending: boolean;
  startingBalanceError: string;
}

const initialState: BalanceState = {
  startingBalance: 0,
  startingBalancePending: false,
  startingBalanceError: '',
};

export const balanceReducer = function (state = initialState, action: any) {
  switch (action.type) {
    case GET_STARTING_BALANCE:
      action;
      return {
        ...state,
        startingBalancePending: true,
        startingBalanceError: '',
      };
    case GET_STARTING_BALANCE_SUCCESS:
      return {
        ...state,
        startingBalance: action.payload,
        accountsPending: false,
      };
    case GET_STARTING_BALANCE_ERROR:
      return {
        ...state,
        startingBalanceError: action.payload,
        accountsPending: false,
      };
    case EDIT_STARTING_BALANCE:
      action;
      return {
        ...state,
        startingBalancePending: true,
        startingBalanceError: '',
      };
    case EDIT_STARTING_BALANCE_SUCCESS:
      return {
        ...state,
        startingBalance: action.payload,
        accountsPending: false,
      };
    case EDIT_STARTING_BALANCE_ERROR:
      return {
        ...state,
        startingBalanceError: action.payload,
        accountsPending: false,
      };

    default:
      return state;
  }
};
