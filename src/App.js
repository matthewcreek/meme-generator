import React from "react";
import "./App.css";

import boxes from "./data/boxes";

import Box from "./components/Box";

export default function App() {

  const [squares, setSquares] = React.useState(boxes)

  const squareElements = squares.map(square => (
    <Box square={square} key={square.id} />
  ))

  return (
    <main>
      {squareElements}
    </main>
  );
}
