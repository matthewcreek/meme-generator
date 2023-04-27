import React from "react";

export default function Box(props) {

    const [boxColor, setBoxColor] = React.useState(props.square.on)

    const styles = {
        backgroundColor: boxColor ? '#222222' : '#cccccc',
    }

    function handleClick() {
        setBoxColor(prevBoxColor => !prevBoxColor)
    }

    return (
        <div style={styles} className="box" onClick={handleClick}></div>
    )
}