import React from 'react';
import Button from '../../Button/Button';
import styles from './Header.module.css';
import globalStyles from '../../../styles/global.module.css';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const navigateToSignIn = () => {
    history.push('auth');
  };

  return (
    <header className={styles.Header}>
      <div className="nav">Nav</div>
      <div className={globalStyles.HorizontalSpacer}></div>
      <Button action={navigateToSignIn}>Sign In</Button>
    </header>
  );
};

export default Header;
