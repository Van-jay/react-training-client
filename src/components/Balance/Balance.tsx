import React from 'react';
import dashboardStyles from '../../styles/dashboard.module.css';

interface Props {
  startingBalance: number;
}

const Balance = ({ startingBalance }: Props) => {
  return (
    <div className={dashboardStyles.DashboardItemWrapper}>
      <h3 className={dashboardStyles.DashboardItemHeading}>Starting Balance</h3>
      <div>{startingBalance}</div>
    </div>
  );
};

export default Balance;
