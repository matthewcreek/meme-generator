import React from 'react';
import './App.css';

import Header from "./components/Header";
import Meme from './components/Meme';
import Count from './components/Count';

function App() {
  const [count, setCount] = React.useState(0);

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

  return (
    <div>
      <div className="counter">
        <button className="counter--minus" onClick={subtract}>–</button>
        <Count number={count} />
        <button className="counter--plus" onClick={add}>+</button>
      </div>
      {/* <Header /> */}
      {/* <Meme /> */}
    </div>
  );
}

export default App;
