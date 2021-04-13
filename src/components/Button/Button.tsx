import React from 'react';
import styles from './Button.module.css';

interface Props {
  children: any;
  action: () => void;
}

const Button = ({ action, children }: Props) => {
  return (
    <button className={styles.Button} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
