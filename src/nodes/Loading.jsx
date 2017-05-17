// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch as ReduxDispatch } from 'redux';
import { Icon } from 'react-fa';
import fun from 'funcy';
import animations from 'animate.css';
import styles from './loading.css';
import * as loadingTypes from '../constants/LoadingTypes';

type Props = {
  loading: any,
  dispatch: ReduxDispatch<*>,
};

const $ = fun.parameter;

/* eslint no-unused-vars: 0 */
function Loading({ loading } : Props) {
  const { animated } = animations;
  const { INITIAL, START_LOADING, END_LOADING } = loadingTypes;
  const getClass = fun(
    [INITIAL, () => null],
    [START_LOADING, () => `${styles.container} ${animated} ${animations.fadeIn}`],
    [END_LOADING, () => `${styles.container} ${animated} ${animations.fadeOut}`],
    [$, () => { throw new TypeError('Unexpected LoadingTypes.'); }],
  );
  return (
    <div className={getClass(loading)}>
      <Icon spin name="spinner" />
    </div>
  );
}

export default connect(
  state => ({ loading: state.loading }),
)(Loading);
