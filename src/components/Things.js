import React from "react";

function Things() {

    const [thingsArr, setThingsArr] = React.useState(['thing 1','thing 2']);
    const arrElements = thingsArr.map(item => {
        return (
            <p>{item}</p>
        )
    })

    function addItem(){
        let num = thingsArr.length + 1;
        setThingsArr(prevThingsArr => [...prevThingsArr, `thing ${num}`])
    }

    const [isImportant, setIsImportant] = React.useState(true)

    function handleClick() {
        setIsImportant(prevImportant => !prevImportant); 
    }
    
    return (
        <div>
            <button
                onClick={addItem}
            >Add item</button>
            {arrElements}
            <h1>is state important to know?</h1>
            <h1>{isImportant ? "Yes" : "No"}</h1>
            <button
                onClick={handleClick}
            >Change State</button>
        </div>
    )
}

export default Things;