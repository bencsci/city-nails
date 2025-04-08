import React from "react";
import AboutSalon from "../components/About/AboutSalon";
import WhatWeOffer from "../components/About/WhatWeOffer";
import OurHistory from "../components/About/OurHistory";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="overflow-hidden">
      {/* Small invisible margin to account for fixed navbar */}
      <div className="h-16 md:h-20"></div>

      {/* About Salon section */}
      <AboutSalon />

      {/* Services section */}
      <WhatWeOffer />

      {/* History section */}
      <OurHistory />
    </div>
  );
}

export default About;
