import React from 'react';
import { Account } from '../../models/accounts';
import AccountsListItem from '../AccountsListItem/AccountsListItem';
import dashboardStyles from '../../styles/dashboard.module.css';

interface Props {
  accounts: Account[];
  error: string;
  pending: boolean;
}

const AccountsList = ({ accounts, error }: Props) => {
  return (
    <div className={dashboardStyles.DashboardItemWrapper}>
      <h3 className={dashboardStyles.DashboardItemHeading}>Accounts</h3>
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
