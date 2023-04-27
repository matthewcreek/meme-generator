import React from "react";

import starRed from '../images/star.png'
import empty from '../images/empty.png'

export default function Star(props) {

    const starIcon = props.isFilled ? starRed : empty;

    return (
        <img 
            className="card--favorite" 
            src={starIcon} 
            alt='star Icon'
            onClick={props.handleClick}
        />
    )
}