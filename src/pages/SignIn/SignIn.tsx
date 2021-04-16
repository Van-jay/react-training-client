import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import { authorise } from '../../store/actions/authActions';
import styles from './SignIn.module.css';

const SignIn = () => {
  const state = useSelector((state: any) => state);

  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(authorise('123'));
    console.log(state);
  };

  return (
    <div className={styles.SignIn}>
      <AuthForm signInAction={signIn}></AuthForm>
    </div>
  );
};

export default SignIn;
