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
      <label htmlFor={name}>{label}</label>
      <input className={styles.Input} name={name} onChange={onChange}></input>
    </div>
  );
};

export default Input;
