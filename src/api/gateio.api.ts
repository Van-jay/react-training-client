import axios from 'axios';
import {
  getGateioAccounts,
  getGateioAccountsError,
  getGateioAccountsSuccess,
} from '../store/actions/gateioActions';

function fetchGateioAccounts() {
  return (dispatch: any) => {
    dispatch(getGateioAccounts());
    axios
      .get('http://localhost:8000/gateio/getAccountsList')
      .then((res: any) => {
        dispatch(getGateioAccountsSuccess(res));
        return res.products;
      })
      .catch((error) => {
        dispatch(getGateioAccountsError(error));
      });
  };
}

export default fetchGateioAccounts;
