// @flow
import React, { Component } from 'react';
import type { Dispatch as ReduxDispatch } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import styles from './about.css';
import { isNil } from '../utils/M';
import LoadingSlide from './LoadingSlider';
import { fetchAboutInfo } from '../actions';

type Props = {
  about: any,
  dispatch: ReduxDispatch<*>,
}

class About extends Component<any, Props, any> {
  componentDidMount() {
    this.props.dispatch(fetchAboutInfo());
  }

  render() {
    if (isNil(this.props.about)) return <LoadingSlide />;
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
                this.props.about.game.map((game, key) => (
                  <tr className={styles.row} key={game.name}>
                    <td className={styles.label}>{key === 0 ? 'Game' : ''}</td>
                    <td className={styles.content}>{game.name}</td>
                    <td className={styles.detail}>{game.detail}</td>
                  </tr>
                ))
              }
              {
                this.props.about.favorite.map((favorite, key) => (
                  <tr className={styles.row} key={favorite}>
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
