import React from "react";
import Puppy from './Puppy';

function PuppyList() {
    const puppies = [
        {name: 'French Bulldog', breed: 'French Bulldog Breed', image:'https://img.freepik.com/premium-photo/group-french-bulldog-puppies-blue-background_106368-2951.jpg'},
        {name: 'Boston Terrier', breed: 'Boston Terrier Breed', image:'https://www.bostonterriersociety.com/wp-content/uploads/2022/11/28-1024x1024.jpg'},
        {name: 'Pekingese', breed: 'Pekingese Breed', image:'https://media.istockphoto.com/id/496985576/photo/pekingese-puppies.jpg?s=612x612&w=0&k=20&c=CaMmKFLoK0EWPIwCocdncQ9M1lI00QINgxwusljcsKw='},
        {name: 'Pug', breed: 'Pug Breed', image:'https://patchpuppy.com/wp-content/uploads/2023/01/1.HowManyPupsCanAPugHave.jpg'},
        {name: 'English Bulldog', breed: 'English Bulldog Breed', image: 'https://i0.wp.com/cazaresbulldogs.com/wp-content/uploads/2022/07/DSC_0384-scaled.jpg?fit=2560%2C1702&ssl=1'},
    ];
    
    return (
        <div>
            <h2>Puppy List</h2>
            {puppies.map((puppy, index) => (
                <Puppy key={index}
                name={puppy.name} breed={puppy.breed} image={puppy.image} />
            ))}
        </div>
    );
}