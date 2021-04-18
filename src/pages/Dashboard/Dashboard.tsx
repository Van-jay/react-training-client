import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import fetchGateioAccounts from '../../api/gateio.api';
import AccountsList from '../../components/AccountsList/AccountsList';
import {
  getGateioAccounts,
  getGateioAccountsError,
  getGateioAccountsPending,
} from '../../store/reducers/gateioReducer';
import { getAuthToken } from '../../store/reducers/authReducer';
import { RootReducer } from '../../store/reducers/rootReducer';
import styles from './Dashboard.module.css';
import { Account } from '../../models/accounts';

const Dashboard = () => {
  // TODO: add with auth hoc
  const dispatch = useDispatch();
  const history = useHistory();

  const authState = useSelector((state: RootReducer) => state).auth;
  const authToken = getAuthToken(authState);

  const gateioState = useSelector((state: RootReducer) => state).gateio;
  const gateioAccounts: Account[] = getGateioAccounts(gateioState);
  const gateioAccountsError: string = getGateioAccountsError(gateioState);
  const gateioAccountsPending: boolean = getGateioAccountsPending(gateioState);

  useEffect(() => {
    if (!authToken) {
      history.push('/auth');
    }
  }, [authToken]);

  useEffect(() => {
    dispatch(fetchGateioAccounts());
  }, []);

  return (
    <div className={styles.Dashboard}>
      <AccountsList
        accounts={gateioAccounts}
        error={gateioAccountsError}
        pending={gateioAccountsPending}
      />
    </div>
  );
};

export default Dashboard;
