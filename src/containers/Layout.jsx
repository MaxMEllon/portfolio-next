import React from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';
import Navbar from '../components/Navbar';
import Loading from '../nodes/Loading';
import ErrorSnackbar from '../components/ErrorSnackbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar title="maxmellon.github.io" />
      <Loading />
      <RouteCSSTransitionGroup
        component="div" transitionName="routing"
        transitionEnterTimeout={1000} transitionLeaveTimeout={400}
      >
        {children}
      </RouteCSSTransitionGroup>
      <ErrorSnackbar />
    </div>
  );
}
