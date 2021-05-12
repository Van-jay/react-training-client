import React, { useState } from 'react';
import dashboardStyles from '../../styles/dashboard.module.css';

interface Props {
  startingBalance: number;
  // eslint-disable-next-line no-unused-vars
  // editStartingBalance: (startingBalance: number) => void;
}

const Balance = ({ startingBalance }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);
  // const [startingBalance, setStartingBalance] = useState(startingBalance);

  return (
    <div className={dashboardStyles.DashboardItemWrapper}>
      <div className={dashboardStyles.DashboardItemHeadingWrapper}>
        <h3 className={dashboardStyles.DashboardItemHeading}>
          Starting Balance
        </h3>
        <span onClick={() => setIsEditMode(!isEditMode)}>
          {/* <span onClick={() => editStartingBalance({ startingBalance })}> */}
          Edit
        </span>
      </div>
      {isEditMode ? 'EDIT MODE' : <div>{startingBalance}</div>}
    </div>
  );
};

export default Balance;
