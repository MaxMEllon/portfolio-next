import React from 'react';
import styles from './navitem.css';

export default function NavIitem({ last, content }) {
  const klass = last == null ? styles.item : styles.lastItem;
  return (
    <li className={klass}>
      <span>{content}</span>
    </li>
  )
}
