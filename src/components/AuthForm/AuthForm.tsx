import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './AuthForm.module.css';

interface Props {
  // eslint-disable-next-line no-unused-vars
  signInAction: (username: string, password: string) => void;
}

const AuthForm = ({ signInAction }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.AuthFormWrapper}>
      <h1>Auth</h1>
      <div className={styles.InputsWrapper}>
        <Input
          name="username"
          label="Username"
          onChange={setUsername}
          value={username}
        ></Input>
        <Input
          name="password"
          label="Password"
          onChange={setPassword}
          value={password}
        ></Input>
      </div>
      <Button action={() => signInAction(username, password)}>Sign In</Button>
    </div>
  );
};

export default AuthForm;
