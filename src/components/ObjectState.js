import React from "react";

import star from '../images/star.png'
import user from '../images/katie-zaferes.png'

export default function ObjectState() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        console.log('Toggle Favorite')
    }

    return (
        <div>
            <article className="card">
                <img src={user} className="card--image" />
                <div className="card--info">
                    <img 
                        src={star} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName + " " + contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </div>
    )
}