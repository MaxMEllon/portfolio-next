import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import styles from './loading.css';

class Loading extends React.Component {
  render() {
    return this.props.loading === true
      ? (
        <div className={styles.container}>
          <Icon spin name="spinner" />
        </div>
      )
      : null;
  }
}

export default connect(
  state => ({ loading: state.loading }),
)(Loading);
