import React from 'react';
import './App.css';

import Count from './components/Count';

function App() {
  const [count, setCount] = React.useState(0);

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("App component rendered")

  return (
    <div>
      <div className="counter">
        <button className="counter--minus" onClick={subtract}>–</button>
        <Count number={count} />
        <button className="counter--plus" onClick={add}>+</button>
      </div>
    </div>
  );
}

export default App;
