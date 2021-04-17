import React from 'react';

interface Props {
  icon: string;
  // text: string;
  action: () => void;
}

const SidebarItem = ({ icon, action }: Props) => {
  return <div onClick={action}>{icon}</div>;
};

export default SidebarItem;
