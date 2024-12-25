import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSalon from "../components/About/AboutSalon";
import WhatWeOffer from "../components/About/WhatWeOffer";
import OurHistory from "../components/About/OurHistory";

function About() {
  return (
    <div>
      <Navbar />
      <AboutSalon />
      <WhatWeOffer />
      <OurHistory />
      <Footer />
    </div>
  );
}

export default About;
