import React, { Component } from 'react';
import './App.css';
import RouletteGun from './state-drills/RouletteGun.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouletteGun />
      </div>
    );
  }
}

export default App;