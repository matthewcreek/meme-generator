import React from 'react';
import './App.css';

import Header from "./components/Header";
import Meme from './components/Meme';
import Things from './components/Things';
import StateExample from './components/StateExample';

function App() {
  return (
    <div>
      <Header />
      <Meme />
      {/* <Things /> */}
      {/* <StateExample /> */}
    </div>
  );
}

export default App;
