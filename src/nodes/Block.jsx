import React from 'react';
import styles from './block.css';

export default function Block({ x, y, color, backgroundColor, content }) {
  return (
    <div
      className={styles.button}
      style={{
        top: `${(y * 12)}vw`,
        left: `${(x * 12)}vw`,
        color,
        backgroundColor,
      }}
    >
      <p>{content}</p>
    </div>
  );
}
