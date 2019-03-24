import React, { Component } from 'react';
import './App.css';
import Time from './components/Time'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hello, zeit now!</h3>
        <Time />
      </div>
    );
  }
}

export default App;
