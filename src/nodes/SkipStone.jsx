import React from 'react';
import styles from './skipstone.css';

export default function SkipStone() {
  return (
    <svg className={styles.heartLoader} viewBox="0 0 90 90" version="1.1">
      <g className={styles.heartLoader__group}>
        <path
          className={styles.heartLoader__square}
          strokeWidth="1"
          fill="none" d="M0,30 0,90 60,90 60,30z"
        />
        <path
          className={`${styles.heartLoader__circle} ${styles.m__left}`}
          strokeWidth="1"
          fill="none"
          d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
        />
        <path
          className={`${styles.heartLoader__circle} ${styles.m__right}`}
          strokeWidth="1"
          fill="none"
          d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
        />
        <path
          className={styles.heartLoader__heartPath}
          strokeWidth="2"
          d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"
        />
      </g>
    </svg>
  );
}

