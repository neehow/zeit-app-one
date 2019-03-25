import React, { Component } from 'react';
import './App.css';
import ColorConverter from './components/ColorConverter';
import Footer from './components/Home/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorConverter />
        <Footer />
      </div>
    );
  }
}

export default App;
