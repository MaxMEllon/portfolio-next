import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navitem.css';
import M from '../utils/M';

export default function NavIitem({ last, content, to }) {
  const klass = M.isNil(last) ? styles.item : styles.lastItem;
  return (
    <li className={klass}>
      <span>
        <Link to={{ pathname: to }}>
          {content}
        </Link>
      </span>
    </li>
  );
}
