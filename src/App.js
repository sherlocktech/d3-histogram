import React from 'react';
import logo from './logo.svg';
import './App.css';
import Histogram from "./Histogram";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Histogram data={[50,10,1,3]} size={[500,500]} />
      </header>
    </div>
  );
}

export default App;
