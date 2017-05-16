// @flow
import React from 'react';
import type { Children } from 'react';
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup';
import Navbar from '../components/Navbar';
import Loading from '../nodes/Loading';
import ErrorSnackbar from '../components/ErrorSnackbar';

type Props = {
  children: Children,
}

export default function Layout({ children } : Props) {
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
