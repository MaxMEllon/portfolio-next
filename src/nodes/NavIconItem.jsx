import React from 'react';
import styles from './navitemicon.css';
import { Icon } from 'react-fa';

export default function NavIitem({ iconName }) {
  return (
    <li className={styles.iconItem}>
      <Icon name={iconName} />
    </li>
  )
}
