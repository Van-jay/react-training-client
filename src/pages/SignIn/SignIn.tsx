import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './SignIn.module.css';

const SignIn = () => {
  const signIn = () => console.log('Sign in works!');

  return (
    <div className={styles.SignIn}>
      <AuthForm signInAction={signIn}></AuthForm>
    </div>
  );
};

export default SignIn;
