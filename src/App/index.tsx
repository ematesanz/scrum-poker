import React, { Component } from 'react';
import './App.scss';
import Cards from '../Cards'

const cards = ['1', '2', '3', '5', '8', '13', '21', '∞', 'coffee'];

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Settings /> */}
        <Cards cards={cards} />
      </div>
    );
  }
}

export default App;
