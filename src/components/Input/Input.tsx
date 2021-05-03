// TODO: remove eslint-disable
import React from 'react';
import styles from './Input.module.css';

interface Props {
  name: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
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
        onChange={(e) => onChange(e.currentTarget.value)}
      ></input>
    </div>
  );
};

export default Input;
