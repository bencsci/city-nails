import React from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonial";
import Info from "./components/Info"; 

function App() {
  return (
    <div>
      <Hero />
      <Info />
      <Carousel />
      <Testimonial />
    </div>
  );
}

export default App;
