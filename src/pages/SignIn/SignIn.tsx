import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './SignIn.module.css';

const SignIn = () => {
  return (
    <>
      <AuthForm></AuthForm>
      <div className={styles.SignIn}>Sign In!</div>;
    </>
  );
};

export default SignIn;
