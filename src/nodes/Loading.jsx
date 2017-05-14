import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import match from 'rust-match';
import animations from 'animate.css';
import styles from './loading.css';
import * as loadingTypes from '../constants/LoadingTypes';

/* eslint no-unused-vars: 0 */
function Loading({ loading }) {
  const { animated } = animations;
  const klass = match(loading, [
    INITIAL => null,
    START_LOADING => `${styles.container} ${animated} ${animations.fadeIn}`,
    END_LOADING => `${styles.container} ${animated} ${animations.fadeOut}`,
  ]);
  return (
    <div className={klass}>
      <Icon spin name="spinner" />
    </div>
  );
}

export default connect(
  state => ({ loading: state.loading }),
)(Loading);
