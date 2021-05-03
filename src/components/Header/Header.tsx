import React from 'react';
import Button from '../Button/Button';
import styles from './Header.module.css';
import globalStyles from '../../styles/global.module.css';
import { useHistory } from 'react-router-dom';
import { getIsAuthenticated, resetAuthToken } from '../../utils/auth.utils';

const Header = () => {
  const history = useHistory();
  const isAuthenticated = getIsAuthenticated();

  const navigateToSignIn = () => {
    history.push('auth');
  };

  const signOut = () => {
    resetAuthToken();
  };

  return (
    <header className={styles.Header}>
      {/* <div className="nav">Nav</div> */}
      <div className={globalStyles.HorizontalSpacer}></div>
      {isAuthenticated ? (
        <Button action={signOut}>Sign Out</Button>
      ) : (
        <Button action={navigateToSignIn}>Sign In</Button>
      )}
    </header>
  );
};

export default Header;
