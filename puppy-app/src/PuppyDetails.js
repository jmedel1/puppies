import React from "react";
import { useParams } from "react-router-dom";

function PuppyDetails() {
    const {id} = useParams();

    const puppyData = {
        1: {
        name: 'French Bulldog',
        breed: 'French Bulldog Breed',
        description: 'French Bulldogs are known for their affectionate nature and adorable bat-like ears.',
        movingPicture: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGsxMXhreHFjemp1eWc4MXdoMHlqbWdyemF2OHF2ZmZoMHE0dW0xciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dEPGknRiEniec/giphy.gif',
    },
        2: {
            name: 'Boston Terrier',
            breed: 'Boston Terrier Breed',
            description: 'Boston Terriers are small and friendly dogs with a lively and outgoing personality.',
         movingPicture: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRxcnY2em9nNWoyMTYxaWF4dnRiOGY0aHR2NGV1bTBoMjE2ODhjMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PiuapHv98aApBzsQqd/giphy.gif',   
     },
       3: {
        name: 'Peckingese',
        breed: 'Peckingese Breed',
        description: 'The Pekingese is a small, royal companion dog with a distinctive appearance and a courageous spirit.',
        movingPicture: 'https://media.tenor.com/sWKr-xo2at8AAAAM/crocodile-retreat.gif',
    },
       4: {
        name: 'Pug',
        breed: 'Pug Breed',
        description: 'The Pug is a charming and playful small breed known for its wrinkled face and endearing personality.',
        movingPicture: 'https://media.tenor.com/XteRCC7v4iQAAAAM/black-dog-funny.gif',
    },
       5: {
        name: 'English Bulldog',
        breed: 'English Bulldog',
        description: 'The English Bulldog is a robust and affectionate breed with a distinctive appearance and gentle temperament.',
        movingPicture: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTVycmd2MzdoeHp0d2NmYzJzam90NTVpcnVvMG1sNWl1ejlxMW44diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2XflxzqJ29VI6NjDxK0/giphy.gif',
       },
    };

    const puppy = puppyData[id];

    if (!puppy) {
        return <div>Puppy not found!</div>;
    }

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