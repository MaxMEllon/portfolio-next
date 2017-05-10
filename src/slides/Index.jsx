import React from 'react';
import styles from './index.css';
import Block from '../nodes/Block';

export default function Index() {
  return (
    <div className={styles.container}>
      <Block
        x={0}
        y={0}
        color="black"
        backgroundColor="white"
        content="hoge"
      />
      <Block
        x={2}
        y={0}
        color="white"
        backgroundColor="blue"
        content="hoge"
      />
      <Block
        x={1}
        y={1}
        color="black"
        backgroundColor="white"
        content="hoge"
      />
      <Block
        x={0}
        y={1}
        color="white"
        backgroundColor="gray"
        content="hoge"
      />
      <Block
        x={1}
        y={2}
        color="white"
        backgroundColor="cyan"
        content="hoge"
      />
      <Block
        x={0}
        y={3}
        color="white"
        backgroundColor="pink"
        content="hoge"
      />
      <Block
        x={2}
        y={4}
        color="white"
        backgroundColor="pink"
        content="hoge"
      />
    </div>
  );
}
