// @flow
import '!style-loader!css-loader!reset.css/reset.css';
import '!style-loader!css-loader!font-awesome/css/font-awesome.min.css';
import '!style-loader!css-loader!./layout.css';
import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Layout from './Layout';
import Index from '../slides/Index';
import About from '../slides/About';
import Articles from '../slides/Articles';

export default function App() {
  return (
    <Router>
      {/* eslint react/no-children-prop: 0 */}
      <Layout
        children={
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/index" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/environment" component={About} />
            <Route path="/articles" component={Articles} />
            <Route path="/activities" component={About} />
            <Route path="/projects" component={About} />
            <Route component={Index} />
          </Switch>
        }
      />
    </Router>
  );
}
