import React from 'react';
import styles from './Input.module.css';

interface Props {
  name: string;
  label: string;
  onChange: () => void;
}

const Input = ({ name, label, onChange }: Props) => {
  return (
    <div className={styles.InputWrapper}>
      <label className={styles.Label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.Input}
        name={name}
        placeholder={label}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
