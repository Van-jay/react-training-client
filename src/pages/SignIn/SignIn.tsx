import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import authoriseRequest from '../../api/auth.api';
import AuthForm from '../../components/AuthForm/AuthForm';
import { AuthState, getAuthToken } from '../../store/reducers/authReducer';
import styles from './SignIn.module.css';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state: AuthState) => state);

  const authToken = getAuthToken(state);

  useEffect(() => {
    if (authToken) {
      history.push('/dashboard');
    }
  }, [authToken]);

  const signIn = () => {
    dispatch(authoriseRequest());
    console.log(state);
  };

  return (
    <div className={styles.SignIn}>
      <AuthForm signInAction={signIn}></AuthForm>
    </div>
  );
};

export default SignIn;
