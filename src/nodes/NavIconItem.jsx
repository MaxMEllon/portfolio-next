// @flow
import React from 'react';
import styles from './navitemicon.css';
import { Icon } from 'react-fa';

type Props = {
  iconName: string,
};

export default function NavIitem({ iconName } : Props) {
  return (
    <li className={styles.iconItem}>
      <Icon name={iconName} />
    </li>
  );
}
