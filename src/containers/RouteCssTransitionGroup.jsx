// @flow
import React, { Component, Element } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import StaticContainer from 'react-static-container';

const getPathname = router => router.route.location.pathname;

type Props = {
  component: string,
  transitionName: string,
  transitionEnterTimeout: number,
  transitionLeaveTimeout: number,
  children: Element<any>,
};

type State = {
  previousPathname: string | null,
};

type Context = {
  router: any,
};

export default class RouteCSSTransitionGroup extends Component<any, Props, State> {
  state: State;
  context: Context;

  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props: Props, context: Context) {
    super(props, context);
    this.state = { previousPathname: null };
  }

  componentWillReceiveProps(nextProps: Props, nextContext: any) {
    const nextPathname = getPathname(nextContext.router);
    const currentPathname = getPathname(this.context.router);
    if (nextPathname !== currentPathname) {
      this.setState({ previousPathname: currentPathname });
    }
  }

  componentDidUpdate() {
    if (this.state.previousPathname) {
      /* eslint react/no-did-update-set-state: 0 */
      this.setState({ previousPathname: null });
    }
  }

  render() {
    const { children, ...props } = this.props;
    const { previousPathname } = this.state;
    const currentPathname = getPathname(this.context.router);
    return (
      <ReactCSSTransitionGroup {...props}>
        <StaticContainer
          key={previousPathname || currentPathname}
          shouldUpdate={!previousPathname}
        >
          {children}
        </StaticContainer>
      </ReactCSSTransitionGroup>
    );
  }
}
