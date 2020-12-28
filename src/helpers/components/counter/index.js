import React from 'react';
import './App.css';
import sum from './helpers/sum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {sum(12, 13)}
      </header>
    </div>
  );
}

export default App;
