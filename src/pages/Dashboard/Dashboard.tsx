import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getAuthToken } from '../../store/reducers/authReducer';
import { RootReducer } from '../../store/reducers/rootReducer';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  // TODO: add with auth hoc

  const history = useHistory();
  const state = useSelector((state: RootReducer) => state).auth;

  const authToken = getAuthToken(state);

  useEffect(() => {
    if (!authToken) {
      history.push('/auth');
    }
  }, [authToken]);

  return <div className={styles.Dashboard}>Dashboard</div>;
};

export default Dashboard;
