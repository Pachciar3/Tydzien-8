import React, { useState } from 'react';

function Counter({ start = 0 }) {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(start);

  function changeCounter(number, action) {
    if (action === 'addition') {
      setCounter(prev => prev + number);
    } else if (action === 'substraction') {
      setCounter(prev => prev - number);
    }
  }

  function handleReset() {
    setCounter(start);
  }

  function handleInput(e) {
    setText(e.target.value);
  }
  function handleInitialChange() {
    console.log(text);
    setCounter(Number(text));
    setText('');
  }

  return (
    <div>
      <span className="result">{counter}</span>
      <button onClick={() => changeCounter(1, 'addition')} className="addition">+</button>
      <button onClick={() => changeCounter(1, 'substraction')} className="substraction">-</button>
      <button className="reset" onClick={handleReset}>Reset</button>
      <div>
        <input type="text" value={text} onChange={handleInput} />
        <button className="start-changer" onClick={handleInitialChange}>Zmień</button>
      </div>
    </div>
  );
}

export default Counter;
