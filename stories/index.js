import React from 'react';
import HeartStone from '../src/nodes/HeartStone';
import { storiesOf } from '@kadira/storybook';

storiesOf('HeartStone', module)
  .add('to Storybook', () => (
    <HeartStone />
  ));

