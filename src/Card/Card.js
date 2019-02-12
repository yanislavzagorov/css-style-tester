import React from 'react';
import './Card.css'

const card = ( props ) => {
    const allProperties =[
        "bold",
        "italic",
        "red",
        "yellow",
    ]

    return (
        <div className="Card">
            <p>Paragraf</p>
        </div>
    )
}

export default card;