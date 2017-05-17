// @flow
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import styles from './block.css';

type Props =  {
  to: string,
  content: string,
  backgroundColor: string,
};

export default function Block({ to, content, backgroundColor } : Props) {
  return (
    <div>
      <div className={styles.background} />
      <Link to={{ pathname: to }}>
        <div className={`${styles.button} ${styles[content]}`}>
          <span>
            {content}
          </span>
        </div>
      </Link>
    </div>
  );
}
