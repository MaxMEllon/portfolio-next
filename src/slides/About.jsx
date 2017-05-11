import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import styles from './about.css';
import M from '../utils/M';
import LoadingSlide from './LoadingSlider';
import { fetchAboutInfo } from '../actions';

class About extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAboutInfo());
  }

  render() {
    if (M.isNil(this.props.about)) return <LoadingSlide />;
    return (
      <div className={styles.container}>
        <div className={styles.paper}>
          <h1 className={styles.header}>
            <Icon name="desktop" />
            <span className={styles.title}>About</span>
          </h1>
          <hr className={styles.line} />
          <table className={styles.table}>
            <tbody>
              <tr className={styles.row}>
                <td className={styles.label}>Handle</td>
                <td className={styles.content}>{this.props.about.handle}</td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.label}>name</td>
                <td className={styles.content}>{this.props.about.name}</td>
              </tr>
              {
                _.map(this.props.about.game, (game, key) => (
                  <tr className={styles.row} key={key}>
                    <td className={styles.label}>{key === 0 ? 'Game' : ''}</td>
                    <td className={styles.content}>{game.name}</td>
                    <td className={styles.detail}>{game.detail}</td>
                  </tr>
                ))
              }
              {
                _.map(this.props.about.favorite, (favorite, key) => (
                  <tr className={styles.row} key={key}>
                    <td className={styles.label}>{key === 0 ? 'Favorite' : ''}</td>
                    <td className={styles.content}>{favorite}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ about: state.about }),
)(About);
