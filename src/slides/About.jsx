import React from 'react';
import { connect } from 'react-redux';
import styles from './about.css';
import {
  fetchAboutInfo,
} from '../actions';

class About extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAboutInfo());
  }

  render() {
    try {
      console.log(this.props.about.toJS());
    } catch (err) {}
    return (
      <div className={styles.container}>
        <div>haaaaaage</div>
      </div>
    );
  }
}

export default connect(
  state => ({ about: state.about }),
)(About);
