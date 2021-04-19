import axios from 'axios';
import {
  getStartingBalance,
  getStartingBalanceError,
  getStartingBalanceSuccess,
} from '../store/actions/balanceActions';
import {} from '../store/actions/gateioActions';

function fetchStartingBalance() {
  return (dispatch: any) => {
    dispatch(getStartingBalance());
    axios
      .get('http://localhost:8000/balance/getStartingBalance')
      .then((res: any) => {
        dispatch(getStartingBalanceSuccess(res.data.startingBalance));
      })
      .catch((error) => {
        dispatch(getStartingBalanceError(error));
      });
  };
}

export default fetchStartingBalance;
