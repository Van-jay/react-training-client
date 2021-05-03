import React from 'react';
import styles from './SvgIcon.module.css';

interface Props {
  icon: string;
}

const SvgIcon = ({ icon }: Props) => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'dashboard':
        return (
          <svg className={styles.SvgIcon}>
            <path
              d="M19,5 L19,7 L15,7 L15,5 L19,5 Z M9,5 L9,11 L5,11 L5,5 L9,5 Z M19,13 L19,19 L15,19 L15,13 L19,13 Z M9,17 L9,19 L5,19 L5,17 L9,17 Z M21,3 L13,3 L13,9 L21,9 L21,3 Z M11,3 L3,3 L3,13 L11,13 L11,3 Z M21,11 L13,11 L13,21 L21,21 L21,11 Z M11,15 L3,15 L3,21 L11,21 L11,15 Z"
              fill="currentColor"
            />
          </svg>
        );
      default:
        return;
    }
  };

  return <>{renderIcon(icon)}</>;
};

export default SvgIcon;
