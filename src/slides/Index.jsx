import React from 'react';
import styles from './index.css';
import Block from '../nodes/Block';
import HeartStone from '../nodes/HeartStone';

export default function Index() {
  return (
    <div className={styles.container}>
      <HeartStone />
      <div className={styles.upBox}>
        <p>It is not the wing of strong's,</p>
      </div>
      <div className={styles.downBox}>
        <p>If you rely on electromagnetic waves.</p>
      </div>
      <Block to="/about" content="About" />
      <Block to="/articles" content="Articles" />
      <Block to="/activities" content="Activities" />
      <Block to="/environment" content="Environment" />
      <Block to="/projects" content="Project" />
      <Block to="/links" content="Links" />
      <div className={styles.circle0} />
      <div className={styles.circle1} />
    </div>
  );
}
