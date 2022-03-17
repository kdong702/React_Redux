import React, { Component } from 'react';

import './App.css';
import WaitingListContainer from './containers/WaitingListContainer';
import CounterContainer from './containers/CounterContainer';
import PaletteContainer from './containers/PaletteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer/>
        <CounterContainer/>
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;