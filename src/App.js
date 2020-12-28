import React from 'react';
import './App.css';
import sum from './helpers/sum';
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {sum(12, 13)}
        {<Counter start={10} />}
      </header>
    </div>
  );
}

export default App;
