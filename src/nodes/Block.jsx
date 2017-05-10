import React from 'react';
import styles from './block.css';

export default function Block({ x, y, color, backgroundColor, content }) {
  return (
    <div
      className={styles.button}
      style={{
        top: `calc(100vh / 6 * ${y})`,
        left: `calc(100vw / 6 * ${x})`,
        color,
        backgroundColor,
      }}
    >
      <p>{content}</p>
    </div>
  );
}
