import axios from 'axios';
import { Balance } from '../models/balance';
import {
  editStartingBalance,
  editStartingBalanceError,
  editStartingBalanceSuccess,
  getStartingBalance,
  getStartingBalanceError,
  getStartingBalanceSuccess,
} from '../store/actions/balanceActions';

function fetchStartingBalance() {
  return (dispatch: any) => {
    dispatch(getStartingBalance());
    axios
      .get<Balance>('http://localhost:8000/balance/getStartingBalance')
      .then((res: any) => {
        dispatch(getStartingBalanceSuccess(res.data.startingBalance));
      })
      .catch((error) => {
        dispatch(getStartingBalanceError(error));
      });
  };
}

function fetchEditStartingBalance(balance: number) {
  return (dispatch: any) => {
    dispatch(editStartingBalance({ startingBalance: balance }));
    axios
      .get('http://localhost:8000/balance/getBalance')
      .then((res: any) => {
        dispatch(editStartingBalanceSuccess(res.data.startingBalance));
      })
      .catch((error) => {
        dispatch(editStartingBalanceError(error));
      });
  };
}

export { fetchStartingBalance, fetchEditStartingBalance };
