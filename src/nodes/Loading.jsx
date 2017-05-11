import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import animations from 'animate.css';
import styles from './loading.css';
import * as loadingTypes from '../constants/LoadingTypes';

class Loading extends React.Component {
  render() {
    const { animated } = animations;
    let klass = '';
    switch (this.props.loading) {
      case loadingTypes.INITIAL:
        return null;
      case loadingTypes.START_LOADING:
        klass = `${styles.container} ${animated} ${animations.fadeIn}`;
        break;
      case loadingTypes.END_LOADING:
        klass = `${styles.container} ${animated} ${animations.fadeOut}`;
        break;
      default:
        throw new Error('Unexpected loading types');
    }
    return (
      <div className={klass}>
        <Icon spin name="spinner" />
      </div>
    );
  }
}

export default connect(
  state => ({ loading: state.loading }),
)(Loading);
