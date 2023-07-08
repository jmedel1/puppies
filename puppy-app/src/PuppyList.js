import React from "react";
import { Link } from "react-router-dom";

function PuppyList() {
    const puppies = [
        {id: 1, name: 'French Bulldog', breed: 'French Bulldog Breed', image:'https://img.freepik.com/premium-photo/group-french-bulldog-puppies-blue-background_106368-2951.jpg'},
        {id: 2, name: 'Boston Terrier', breed: 'Boston Terrier Breed', image:'https://www.bostonterriersociety.com/wp-content/uploads/2022/11/28-1024x1024.jpg'},
        {id: 3, name: 'Pekingese', breed: 'Pekingese Breed', image:'https://media.istockphoto.com/id/496985576/photo/pekingese-puppies.jpg?s=612x612&w=0&k=20&c=CaMmKFLoK0EWPIwCocdncQ9M1lI00QINgxwusljcsKw='},
        {id: 4, name: 'Pug', breed: 'Pug Breed', image:'https://patchpuppy.com/wp-content/uploads/2023/01/1.HowManyPupsCanAPugHave.jpg'},
        {id: 5, name: 'English Bulldog', breed: 'English Bulldog Breed', image: 'https://i0.wp.com/cazaresbulldogs.com/wp-content/uploads/2022/07/DSC_0384-scaled.jpg?fit=2560%2C1702&ssl=1'},
    ];
    
    return (
        <div>
            <h2>Puppy List</h2>
            <ul>
            {puppies.map((puppy) => (
                <li key={puppy.id}>
                    <Link to={`/puppy/${puppy.id}`}>
                        <h3>{puppy.name}</h3>
                        </Link>
                        <p>{puppy.breed}</p>
                        </li>
            ))}
            </ul>
         </div>
    );
}

export default PuppyList;