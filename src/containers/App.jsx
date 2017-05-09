import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Layout from './Layout.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Layout>
          <div>
            <Route exact path="/" component={() => <div>hoge</div>} />
            <Route path="/poge" component={() => <div>poge</div>} />
          </div>
        </Layout>
      </Router>
    );
  }
}
