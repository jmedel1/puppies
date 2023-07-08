import React from "react";

function PuppyDetails({ name, breed, description }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Breed: {breed}</p>
            <p>{description}</p>
        </div>
    )
}