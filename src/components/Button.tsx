import React from 'react';

interface Props {
  text: string;
  action: () => void;
}

const Button = ({ text, action }: Props) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
