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
        dispatch(getGateioAccountsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(getGateioAccountsError(error.response.data));
      });
  };
}

export default fetchGateioAccounts;
