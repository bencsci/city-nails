import React from "react";
import AboutSalon from "../components/About/AboutSalon";
import WhatWeOffer from "../components/About/WhatWeOffer";
import OurHistory from "../components/About/OurHistory";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="overflow-hidden">
      <div className="h-16 md:h-20"></div>
      <AboutSalon />
      <WhatWeOffer />
      <OurHistory />
    </div>
  );
}

export default About;
