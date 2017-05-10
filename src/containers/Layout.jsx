import React from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <RouteCSSTransitionGroup
        component="div" transitionName="routing"
        transitionEnterTimeout={250} transitionLeaveTimeout={250}
      >
        {children}
      </RouteCSSTransitionGroup>
    </div>
  );
}
