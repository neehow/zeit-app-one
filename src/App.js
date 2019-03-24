import React, { Component } from 'react';
import './App.css';
import ColorConverter from './components/ColorConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorConverter /> 
      </div>
    );
  }
}

export default App;
