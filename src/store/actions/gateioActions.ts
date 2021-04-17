// Action Types
export const GET_GATEIO_ACCOUNTS = 'GET_GATEIO_ACCOUNTS';
export const GET_GATEIO_ACCOUNTS_SUCCESS = 'GET_GATEIO_ACCOUNTS_SUCCESS';
export const GET_GATEIO_ACCOUNTS_ERROR = 'GET_GATEIO_ACCOUNTS_ERROR';

// Action creators
export const getGateioAccounts = () => {
  return {
    type: GET_GATEIO_ACCOUNTS,
  };
};

export const getGateioAccountsSuccess = (data: any) => {
  return {
    type: GET_GATEIO_ACCOUNTS_SUCCESS,
    payload: data,
  };
};

export const getGateioAccountsError = (data: any) => {
  return {
    type: GET_GATEIO_ACCOUNTS_ERROR,
    payload: data,
  };
};
