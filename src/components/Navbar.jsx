import React from 'react';
import styles from './navbar.css';
import NavItem from '../nodes/NavItem';
import NavIconItem from '../nodes/NavIconItem';

export default function Navbar({ title }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.rightBox}>
        <NavItem to="/about" content="About" />
        <NavItem to="/articles" content="Articles" />
        <NavItem to="/activities" content="Activities" />
        <NavItem to="/environments" content="Environment" />
        <NavItem to="/projects" content="Projects" last />
        <NavIconItem iconName="twitter" />
        <NavIconItem iconName="facebook-square" />
        <NavIconItem iconName="github-alt" />
      </ul>
    </nav>
  );
}
