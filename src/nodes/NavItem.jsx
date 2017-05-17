// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navitem.css';
import { isNil } from '../utils/M';

type Props = {
  last?: boolean,
  content: string,
  to: string,
};

export default function NavIitem({ last, content, to } : Props) {
  const klass = isNil(last) ? styles.item : styles.lastItem;
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
