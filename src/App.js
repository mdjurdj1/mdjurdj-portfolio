import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './views/Home'
import './App.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
