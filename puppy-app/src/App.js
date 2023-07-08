import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import PuppyList from "./PuppyList";
import PuppyDetails from "./PuppyDetails";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Puppy Power!</p>
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
