// Action Types
export const GET_STARTING_BALANCE = 'GET_STARTING_BALANCE';
export const GET_STARTING_BALANCE_SUCCESS = 'GET_STARTING_BALANCE_SUCCESS';
export const GET_STARTING_BALANCE_ERROR = 'GET_STARTING_BALANCE_ERROR';

// Action creators
export const getStartingBalance = () => {
  return {
    type: GET_STARTING_BALANCE,
  };
};

export const getStartingBalanceSuccess = (data: any) => {
  return {
    type: GET_STARTING_BALANCE_SUCCESS,
    payload: data,
  };
};

export const getStartingBalanceError = (data: any) => {
  return {
    type: GET_STARTING_BALANCE_ERROR,
    payload: data,
  };
};
