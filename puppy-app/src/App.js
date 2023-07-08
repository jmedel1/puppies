import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
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
  <Router>
    <div>
      <Navbar />

      <Route path="/" exact component={Home} />
      <Route path="/puppies" component={PuppyList} />
      <Route path="/puppy/:id" component={PuppyDetails} />
    </div>
  </Router>
);
}

export default App;
