import React from 'react';

interface Props {
  startingBalance: number;
}

const Balance = ({ startingBalance }: Props) => {
  return (
    <div>
      <h3>Starting Balance</h3>
      <div>{startingBalance}</div>
    </div>
  );
};

export default Balance;
