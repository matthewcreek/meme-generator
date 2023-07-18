import React, { useState } from "react";
import WindowTracker from "./WindowTracker";

export default function Window() {

    const [show, setShow] = useState(true);

    function handleClick(event) {
        setShow(!show)
    }

    return (
        <div className='container'>
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}