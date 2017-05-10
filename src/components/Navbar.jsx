import React from 'react';
import styles from './navbar.css';
import { Icon } from 'react-fa';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.title}>maxmellon.github.io</span>
      <ul className={styles.rightBox}>
        <li className={styles.item}>
          <span>About</span>
        </li>
        <li className={styles.item}>
          <span>Encironment</span>
        </li>
        <li className={styles.item}>
          <span>Articles</span>
        </li>
        <li className={styles.item}>
          <span>Activities</span>
        </li>
        <li className={styles.item}>
          <span>Projects</span>
        </li>
        <li className={styles.lastItem}>
          <span>Links</span>
        </li>
        <li className={styles.iconItem}>
        </li>
      </ul>
    </nav>
  );
}
