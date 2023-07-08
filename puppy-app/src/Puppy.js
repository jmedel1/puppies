import React from "react";

function Puppy({ name, breed, image }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{breed}</p>
            <img src={image} alt={name} />
        </div>
    );
}

export default Puppy;