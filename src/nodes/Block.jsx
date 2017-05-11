import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import styles from './block.css';

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fx: this.props.x,
      fy: this.props.y,
      moving: false,
    };
    autoBind(this);
  }

  render() {
    const { x, y, to, content, backgroundColor } = this.props;
    const { fx, fy } = this.state;
    return (
      <div>
        <div className={styles.background} />
        <Link to={{ pathname: to }}>
          <div className={`${styles.button} ${styles[content]}`}>
            <span>
              {content}
            </span>
          </div>
        </Link>
      </div>
    );
  }
}
