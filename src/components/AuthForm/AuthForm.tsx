import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './AuthForm.module.css';

interface Props {
  signInAction: () => void;
}

const AuthForm = ({ signInAction }: Props) => {
  return (
    <>
      <h1>Auth</h1>
      <div className={styles.AuthFormWrapper}>
        <Input
          name="username"
          label="Username"
          onChange={() => console.log(123)}
        ></Input>

        <Input
          name="password"
          label="Password"
          onChange={() => console.log(123)}
        ></Input>

        <Button action={signInAction}>Sign In</Button>
      </div>
    </>
  );
};

export default AuthForm;
