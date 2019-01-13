import React, { Component } from 'react';
import './App.scss';
import Cards from '../Cards'

const cards = ['0', '1', '2', '3', '5', '8', '13', '21', '∞', '?', 'cf'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards cards={cards} />
      </div>
    );
  }
}

export default App;
