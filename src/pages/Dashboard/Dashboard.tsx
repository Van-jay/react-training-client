import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountsList from '../../components/AccountsList/AccountsList';
import {
  getGateioAccounts,
  getGateioAccountsError,
  getGateioAccountsPending,
} from '../../store/selectors/gateioSelector';
import { RootReducer } from '../../store/reducers/rootReducer';
import styles from './Dashboard.module.css';
import { Account } from '../../models/accounts';
import Balance from '../../components/Balance/Balance';
import { getStartingBalance } from '../../store/selectors/balanceSelector';
import {
  fetchEditStartingBalance,
  fetchGateioAccounts,
  // fetchStartingBalance,
} from '../../api/api';
// import { editStartingBalance } from '../../store/actions/balanceActions';

const Dashboard = () => {
  // TODO: add with auth hoc
  const dispatch = useDispatch();

  const gateioState = useSelector((state: RootReducer) => state).gateio;
  const gateioAccounts: Account[] = getGateioAccounts(gateioState);
  const gateioAccountsError: string = getGateioAccountsError(gateioState);
  const gateioAccountsPending: boolean = getGateioAccountsPending(gateioState);

  const balanceState = useSelector((state: RootReducer) => state).balance;
  const startingBalance: number = getStartingBalance(balanceState);
  // const gateioAccountsError: string = getGateioAccountsError(gateioState);
  // const gateioAccountsPending: boolean = getGateioAccountsPending(gateioState);

  useEffect(() => {
    dispatch(fetchGateioAccounts());
    dispatch(fetchEditStartingBalance(480));
  }, []);

  return (
    <div className={styles.Dashboard}>
      <AccountsList
        accounts={gateioAccounts}
        error={gateioAccountsError}
        pending={gateioAccountsPending}
      />
      <Balance
        startingBalance={startingBalance}
        // editStartingBalance={editStartingBalance}
      />
    </div>
  );
};

export default Dashboard;
