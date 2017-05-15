import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.css';
import NavItem from '../nodes/NavItem';
import NavIconItem from '../nodes/NavIconItem';

export default function Navbar({ title }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.title}>
        <Link to={{ pathname: '/' }}>{title}</Link>
      </span>
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
