import http from '../utils/api';
import {
  getGateioAccounts,
  getGateioAccountsError,
  getGateioAccountsSuccess,
} from '../store/actions/gateioActions';
import { Account } from '../models/accounts';

function fetchGateioAccounts() {
  return (dispatch: any) => {
    dispatch(getGateioAccounts());
    http
      .get<Account[]>('http://localhost:8000/gateio/getAccountsList')
      .then(({ data }) => {
        dispatch(getGateioAccountsSuccess(data));
      })
      .catch((error) => {
        dispatch(getGateioAccountsError(error.response.data));
      });
  };
}

export default fetchGateioAccounts;
