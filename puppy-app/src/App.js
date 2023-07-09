import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import PuppyList from "./PuppyList";
import PuppyDetails from "./PuppyDetails";
import './Puppies.css';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Puppy Power!</h2>
      <p>Discover the world of adorable puppies and find your perfect companion.</p>
      <img src="https://media.tenor.com/sTFc7j1xRJ0AAAAC/doge-dancing-doge.gif" alt="Dancing Doge"/>
      <p>
        Are you looking to bring a new furry friend into your life? At Puppy Power, we offer a wide selection of adorable puppies
        for you to explore. Whether you're seeking a playful companion or a loyal family pet, our puppies are sure to capture your heart.
        Browse our puppy listings, learn about different breeds, and discover valuable resources to help you care for your new friend.
      </p>
    </div>
  );
};


function App() {
return (
  <BrowserRouter>
    <div>
      <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/puppies" element={<PuppyList />} />
      <Route path="/puppy/:id" element={<PuppyDetails />} />
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;
