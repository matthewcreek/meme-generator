import React from "react";

function Things() {

    const thingsArr = ['thing 1','thing 2'];
    const arrElements = thingsArr.map(item => {
        return (
            <p>{item}</p>
        )
    })

    function addItem(){
        let num = thingsArr.length + 1;
        thingsArr.push('thing ' + num);
        console.log(thingsArr);
    }

    return (
        <div>
            <button
                onClick={addItem}
            >Add item</button>
            {arrElements}
        </div>
    )
}

export default Things;