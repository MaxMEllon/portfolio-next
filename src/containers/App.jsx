import '!style-loader!css-loader!reset.css/reset.css';
import '!style-loader!css-loader!font-awesome/css/font-awesome.min.css';
import '!style-loader!css-loader!./layout.css';
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
          <Route path="/abouts" component={About} />
          <Route path="/environments" component={About} />
          <Route path="/articles" component={About} />
          <Route path="/activities" component={About} />
          <Route path="/projects" component={About} />
        </div>
      </Layout>
    </Router>
  );
}
