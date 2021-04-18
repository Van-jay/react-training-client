import React from 'react';
import { Account } from '../../models/accounts';
import AccountsListItem from '../AccountsListItem/AccountsListItem';

interface Props {
  accounts: Account[];
  error: string;
  pending: boolean;
}

const AccountsList = ({ accounts, error }: Props) => {
  return (
    <div>
      <h3>Accounts</h3>
      {error ? (
        <div>{error}</div>
      ) : (
        accounts.map((account: Account) => (
          <AccountsListItem key={account.currency} account={account} />
        ))
      )}
    </div>
  );
};

export default AccountsList;
