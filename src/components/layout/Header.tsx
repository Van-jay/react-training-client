import React from 'react';
import Button from '../Button';

const Header = () => {
  const navigateToSignIn = () => {
    console.log('click wors');
  };

  return (
    <header>
      <Button text="Sign In" action={navigateToSignIn}></Button>
    </header>
  );
};

export default Header;
