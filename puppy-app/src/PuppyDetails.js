import React from "react";
import { useParams } from "react-router-dom";

function PuppyDetails() {
    const {id} = useParams();

    const puppy = {
        id,
        name: 'French Bulldog',
        breed: 'French Bulldog Breed',
        description: 'French Bulldogs are known for their affectionate nature and adorable bat-like ears.',
    };

    return (
        <div>
            <h2>Puppy Details</h2>
            <h3>{puppy.name}</h3>
            <p>Breed: {puppy.breed}</p>
            <p>{puppy.description}</p>
        </div>
    )
}

export default PuppyDetails;