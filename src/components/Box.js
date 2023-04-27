import React from "react";

export default function Box(props) {
    const styles = {
        backgroundColor: props.square.on ? '#222222' : '#cccccc',
      }

    return (
        <div style={styles} className="box"></div>
    )
}