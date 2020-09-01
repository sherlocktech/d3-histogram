import React from 'react';
import './App.css';
import Histogram from "./Histogram";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Histogram data={{"apples": 10, "oranges": 5, "pears": 15, "peaches": 30, "bananas": 17}} />
      </header>
    </div>
  );
}

export default App;
