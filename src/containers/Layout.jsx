import React, { Component } from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';

export default function Layout({ children }) {
  return (
    <div>
      <RouteCSSTransitionGroup
        component="div" transitionName="routing"
        transitionEnterTimeout={250} transitionLeaveTimeout={250}
      >
        {children}
      </RouteCSSTransitionGroup>
    </div>
  );
}
