import React from "react";
import "./App.css";

import boxes from "./data/boxes";

export default function App(props) {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */

  const [squares, setSquares] = React.useState(boxes)
  const styles = {
    backgroundColor: props.darkMode ? '#222222' : '#cccccc',
  }

  const squareElements = squares.map(square => (
    <div style={styles} className="box" key={square.id}></div>
  ))

  return (
    <main>
      {squareElements}
    </main>
  );
}
