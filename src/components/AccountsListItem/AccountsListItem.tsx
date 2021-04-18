import React from 'react';
import { Account } from '../../models/accounts';

interface Props {
  account: Account;
}

const AccountsListItem = ({ account }: Props) => {
  return (
    <div>
      <span>{account.currency}</span>
      <span>{account.available}</span>
    </div>
  );
};

export default AccountsListItem;
