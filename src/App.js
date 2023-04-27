import React from "react";
import "./App.css";

import boxes from "./data/boxes";

import Box from "./components/Box";

export default function App() {

  const [squares, setSquares] = React.useState(boxes)

  const squareElements = squares.map(square => (
    <Box 
      square={square} 
      key={square.id} 
      handleClick={() => toggle(square.id)} 
    />
  ))
  
  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map(square => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  return (
    <main>
      {squareElements}
    </main>
  );
}
