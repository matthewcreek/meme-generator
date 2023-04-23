import React from "react";

function StateExample(){
    const [num, setNum] = React.useState(0)

    function addOne() {
        setNum(oldNum => oldNum + 1);
    }

    function minusOne() {
        setNum(oldNum => oldNum - 1);
    }

    function defaultState() {
        setNum(0)
    }

    return (
        <div className="counter">
            <button 
                className="counter--minus"
                onClick={minusOne}
            >-</button>
            <div className="counter--count">
                <h1>{num}</h1>
            </div>
            <button 
                className="counter--plus"
                onClick={addOne}
            >+</button>
            <div>
                <button onClick={defaultState}>Reset</button>
            </div>
        </div>
    )
}

export default StateExample;