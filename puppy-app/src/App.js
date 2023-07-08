import React from "react";
import PuppyList from "../PuppyList";
import PuppyDetails from "../PuppyDetails";


function App() {
const selectedPuppy = {
  name: 'French Bulldog',
  breed: 'French Bulldog Breed',
  description: 'French Bulldogs are known for their affectionate nature and adorable bat-like ears.',
};

return (
  <div>
    <h1>Welcome to Puppy Power!</h1>
    <PuppyList/>
    <h2>Selected Puppy Details</h2>
    <PuppyDetails
    name={selectedPuppy.name}
    breed={selectedPuppy.breed}
    description={selectedPuppy.description} />
  </div>
);
}

export default App;
