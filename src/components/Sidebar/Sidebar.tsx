import React from 'react';
import { useHistory } from 'react-router';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.css';

interface SidebarItem {
  key: number;
  name: string;
  icon: string;
}

const Sidebar = () => {
  const sidebarItems: SidebarItem[] = [
    { key: 1, name: 'dashboard', icon: 'dashboard' },
  ];

  const history = useHistory();

  const navigateTo = (route: string): void => {
    history.push(`/${route}`);
  };

  return (
    <div className={styles.Sidebar}>
      {sidebarItems.map((sidebarItem: SidebarItem) => (
        <SidebarItem
          key={sidebarItem.key}
          icon={sidebarItem.icon}
          action={() => {
            navigateTo(sidebarItem.name);
          }}
        />
      ))}
    </div>
  );
};

export default Sidebar;
