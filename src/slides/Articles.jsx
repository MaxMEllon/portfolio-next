import _ from 'lodash';
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
    if (M.isNil(this.props.about)) return <LoadingSlide />;
    return (
      <div />
    );
  }
}

export default connect(
  state => ({ articles: state.articles }),
)(Articles);
