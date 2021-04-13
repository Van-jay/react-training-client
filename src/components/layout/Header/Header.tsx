import React from 'react';
import Button from '../../Button/Button';
import css from './Header.module.css';

const Header = () => {
  const navigateToSignIn = () => {
    console.log('click wors');
    console.log(css);
  };

  return (
    <header className={css.Header}>
      <Button text="Sign In" action={navigateToSignIn}></Button>
    </header>
  );
};

export default Header;
