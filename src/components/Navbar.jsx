import React from 'react';
import styles from './navbar.css';
import NavItem from '../nodes/NavItem';
import NavIconItem from '../nodes/NavIconItem';

export default function Navbar({ title }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.rightBox}>
        <NavItem content="About" />
        <NavItem content="Environment" />
        <NavItem content="Articles" />
        <NavItem content="Activities" />
        <NavItem last content="Projects" />
        <NavIconItem iconName="twitter" />
        <NavIconItem iconName="facebook-square" />
        <NavIconItem iconName="github-alt" />
      </ul>
    </nav>
  );
}
