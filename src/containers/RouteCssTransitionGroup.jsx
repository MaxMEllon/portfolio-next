import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import StaticContainer from 'react-static-container';

export default class RouteCSSTransitionGroup extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props, context) {
    super(props, context);
    this.state = { previousPathname: null };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const nextPathname = nextContext.router.route.location.pathname;
    const currentPathname = this.context.router.route.location.pathname;
    if (nextPathname !== currentPathname) {
      this.setState({ previousPathname: currentPathname });
    }
  }

  componentDidUpdate() {
    if (this.state.previousPathname) {
      this.setState({ previousPathname: null });
    }
  }

  render() {
    const { children, ...props } = this.props;
    const { previousPathname } = this.state;
    const currentPathname = this.context.router.route.location.pathname;
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
