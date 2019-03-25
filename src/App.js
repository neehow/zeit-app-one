import React, { Component } from 'react';
import './App.css';
import ColorConverter from './components/ColorConverter';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/color-converter/" component={ColorConverter} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
