import React from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';
import styles from './layout.css';

export default function Layout({ children }) {
  return (
    <div>
      <nav className={styles.nav}>
        <span className={styles.title}>maxmellon.github.io</span>
        <div className={styles.rightBox}>
        </div>
      </nav>
      <RouteCSSTransitionGroup
        component="div" transitionName="routing"
        transitionEnterTimeout={250} transitionLeaveTimeout={250}
      >
        {children}
      </RouteCSSTransitionGroup>
    </div>
  );
}
