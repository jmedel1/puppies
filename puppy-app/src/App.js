import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import PuppyList from "./PuppyList";
import PuppyDetails from "./PuppyDetails";


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
