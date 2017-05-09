import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup.jsx';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">------------</Link>
          <Link to="/poge">++++++++++++</Link>
        </nav>
        <RouteCSSTransitionGroup
          component="div" transitionName="routing"
          transitionEnterTimeout={250} transitionLeaveTimeout={250}
        >
          {this.props.children}
        </RouteCSSTransitionGroup>
      </div>
    );
  }
}
