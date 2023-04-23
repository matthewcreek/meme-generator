import React from 'react';
import './App.css';

import Header from "./components/Header";
import Meme from './components/Meme';
import Things from './components/Things';

function App() {
  return (
    <div>
      <Header />
      <Meme />
      {/* <Things /> */}
    </div>
  );
}

export default App;
