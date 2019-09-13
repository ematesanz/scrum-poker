import React, { useState } from 'react';
import './App.scss';
import Cards from '../Cards'

const cards = ['0', '1', '2', '3', '5', '8', '13', '21', '∞', '?', 'cf'];


function App() {
  return (
    <div className="App">
      <Cards cards={cards} />
    </div>
  );
}

export default App;