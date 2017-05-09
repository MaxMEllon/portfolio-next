import React, { Component } from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';

export default function Layout() {
  return (
    <div>
      <RouteCSSTransitionGroup
        component="div" transitionName="routing"
        transitionEnterTimeout={250} transitionLeaveTimeout={250}
      >
        {this.props.children}
      </RouteCSSTransitionGroup>
    </div>
  );
}
