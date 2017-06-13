// @flow
import React from 'react';
import type { Dispatch as ReduxDispatch } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import styles from './articles.css';
import { isNil } from '../utils/M';
import LoadingSlide from './LoadingSlider';
import { fetchArticles } from '../actions';

type Props = {
  articles: any,
  dispatch: ReduxDispatch<*>,
}

class Articles extends React.Component<any, Props, any> {
  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    if (isNil(this.props.articles)) return <LoadingSlide />;
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
              {
                this.props.articles.map(ar => (
                  <tr>
                    <th className={styles.categoryName}>{ar.get('name')}</th>
                    <td>
                      <ul>
                        {
                          ar.get('articles').map(co => (
                            <li>{co.title}</li>
                          ))
                        }
                      </ul>
                    </td>
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
  state => ({ articles: state.articles }),
)(Articles);
