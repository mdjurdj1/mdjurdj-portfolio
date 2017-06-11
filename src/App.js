import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import NavArrowLeft from './components/NavArrowLeft'
import Home from './views/Home'
import About from './views/About'
import Skills from './views/Skills'
import Work from './views/Work'
import Contact from './views/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
