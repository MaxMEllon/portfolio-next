import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import fun from 'funcy';
import { Icon } from 'react-fa'
import animate from 'animate.css';
import styles from './errorsnackbar.css';
import { isNil } from '../utils/M';
import * as barState from '../constants/ErrorSnackbarStates';
import { resetErrorNotify } from '../actions';

// const $ = fun.parameter;

class ErrorSnackbar extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  state = {
    className: '',
    errors: null,
    showState: barState.INITIAL,
  }

  componentWillReceiveProps(nextProps) {
    this.state.showState = nextProps.errors.showState;
    fun(
      [barState.HIDE, () => {
        this.setState({ className: `${animate.animated} ${animate.fadeOut}` });
        setTimeout(() => this.setState({ className: '', showState: barState.INITIAL }), 500);
      }],
      [barState.SHOW, () => {
        this.setState({ className: `${animate.animated} ${animate.fadeIn}` });
        setTimeout(() => this.setState({ className: '' }), 500);
      }],
    )(nextProps.errors.showState);
  }

  onClose() {
    this.props.dispatch(resetErrorNotify());
  }

  render() {
    const { className, showState } = this.state;
    const { errors } = this.props;
    if (isNil(errors) || showState === barState.INITIAL) return null;
    return (
      <div className={`${styles.container} ${className}`}>
        <span>{errors.userMessage}</span>
        <div className={styles.rightBox} onClick={this.onClose}>
          <Icon name="close" size="2x" />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ errors: state.errors }),
)(ErrorSnackbar);
