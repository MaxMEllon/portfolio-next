// @flow
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import type { Dispatch as ReduxDispatch } from 'redux';
import fun from 'funcy';
import { Icon } from 'react-fa';
import animate from 'animate.css';
import styles from './errorsnackbar.css';
import { isNil } from '../utils/M';
import * as barState from '../constants/ErrorSnackbarStates';
import { resetErrorNotify } from '../actions';

type ShowStateEnum =
  | typeof barState.HIDE
  | typeof barState.INITIAL
  | typeof barState.SHOW;

type State = {
  className: string,
  errors: any,
  showState: ShowStateEnum,
};

type Props = {
  errors: any,
  dispatch: ReduxDispatch<*>,
};

class ErrorSnackbar extends Component<any, Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      className: '',
      errors: null,
      showState: barState.INITIAL,
    };
    autoBind(this);
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
        <button className={styles.rightBox} onClick={this.onClose}>
          <Icon name="close" size="2x" />
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({ errors: state.errors }),
)(ErrorSnackbar);
