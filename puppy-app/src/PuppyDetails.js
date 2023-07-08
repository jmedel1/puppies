import React from "react";
import { useParams } from "react-router-dom";

function PuppyDetails() {
    const {id} = useParams();

    const puppy = {
        id,
        name: 'French Bulldog',
        breed: 'French Bulldog Breed',
        description: 'French Bulldogs are known for their affectionate nature and adorable bat-like ears.',
        movingPicture: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGsxMXhreHFjemp1eWc4MXdoMHlqbWdyemF2OHF2ZmZoMHE0dW0xciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dEPGknRiEniec/giphy.gif',
    };

    return (
        <div>
            <h2>Puppy Details</h2>
            <h3>{puppy.name}</h3>
            <p>Breed: {puppy.breed}</p>
            <p>{puppy.description}</p>
            <img src={puppy.movingPicture} alt={puppy.name} />
        </div>
    )
}

export default PuppyDetails;