import '!style-loader!css-loader!reset.css/reset.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Layout from './Layout';
import Index from '../slides/Index';
import About from '../slides/About';

export default function App() {
  return (
    <Router>
      <Layout>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/poge" component={About} />
        </div>
      </Layout>
    </Router>
  );
}
