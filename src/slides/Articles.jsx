import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import styles from './articles.css';
import M from '../utils/M';
import LoadingSlide from './LoadingSlider';
import { fetchArticles } from '../actions';

class Articles extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    if (M.isNil(this.props.articles)) return <LoadingSlide />;
    return (
      <div className={styles.container}>
        <div className={styles.paper}>
          <h1 className={styles.header}>
            <Icon name="desktop" />
            <span className={styles.title}>About</span>
          </h1>
          <hr className={styles.line} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ articles: state.articles }),
)(Articles);
