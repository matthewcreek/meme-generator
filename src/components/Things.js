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

    const [isImportant, setIsImportant] = React.useState('Yes')

    function handleClick() {
        if (isImportant === 'Yes') {
            setIsImportant('No');
        } else {
            setIsImportant('Yes')
        }
        
    }
    
    return (
        <div>
            <button
                onClick={addItem}
            >Add item</button>
            {arrElements}
            <h1>is state important to know?</h1>
            <h1>{isImportant}</h1>
            <button
                onClick={handleClick}
            >Change State</button>
        </div>
    )
}

export default Things;