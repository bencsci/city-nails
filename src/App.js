import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Carousel />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
