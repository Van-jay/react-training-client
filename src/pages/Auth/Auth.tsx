import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import authoriseRequest from '../../api/auth.api';
import AuthForm from '../../components/AuthForm/AuthForm';
import { getAuthToken } from '../../store/selectors/authSelector';
import { RootReducer } from '../../store/reducers/rootReducer';
import styles from './Auth.module.css';

const Auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state: RootReducer) => state.auth);

  const authToken = getAuthToken(state);

  useEffect(() => {
    if (authToken) {
      history.push('/dashboard');
    }
  }, [authToken]);

  const signIn = () => {
    dispatch(authoriseRequest({ username: 'example', password: 'password' }));
  };

  return (
    <div className={styles.Auth}>
      <AuthForm signInAction={signIn}></AuthForm>
    </div>
  );
};

export default Auth;
