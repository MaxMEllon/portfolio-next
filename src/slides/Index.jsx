import React from 'react';
import styles from './index.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.upBox} />
      <div className={styles.downBox} />
    </div>
  );
}
