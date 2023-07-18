import React from 'react';
import './App.css';

import WindowTracker from './components/WindowTracker';

function App() {
  return (
    <div className='container'>
      <button>
        Toggle WindowTracker
      </button>
      <WindowTracker />
    </div>
  );
}

export default App;
