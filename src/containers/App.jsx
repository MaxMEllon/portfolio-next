import '!style-loader!css-loader!reset.css/reset.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Layout from './Layout';
import Index from '../slides/Index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Layout>
          <div>
            <Route exact path="/" component={Index} />
            <Route path="/poge" component={() => <div>poge</div>} />
          </div>
        </Layout>
      </Router>
    );
  }
}
