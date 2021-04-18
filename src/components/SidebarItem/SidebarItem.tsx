import React from 'react';
import styles from './SidebarItem.module.css';
import SvgIcon from '../SvgIcon/SvgIcon';

interface Props {
  icon: string;
  // text: string;
  action: () => void;
}

const SidebarItem = ({ icon, action }: Props) => {
  return (
    <div className={styles.SidebarItem} onClick={action}>
      <SvgIcon icon={icon} />
    </div>
  );
};

export default SidebarItem;
