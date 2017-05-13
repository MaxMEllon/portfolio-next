import React from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';
import Navbar from '../components/Navbar';
import Loading from '../nodes/Loading';
import SkipStone from '../nodes/SkipStone';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar title="maxmellon.github.io" />
      <Loading />
      <SkipStone />
      <RouteCSSTransitionGroup
        component="div" transitionName="routing"
        transitionEnterTimeout={1000} transitionLeaveTimeout={400}
      >
        {children}
      </RouteCSSTransitionGroup>
    </div>
  );
}
