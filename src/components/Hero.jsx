import React from "react";
import Front from "../assets/home_image.jpg";
import { Link } from "react-router";
import { motion } from "motion/react";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Hero = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image with modern responsive sizing */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Front}
          className="w-full h-full object-cover object-center"
          alt="City Nails Salon"
        />
        {/* Gradient overlay instead of white opacity for more elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/50"></div>
      </div>

      {/* Content container with better spacing */}
      <div className="relative z-10 container mx-auto h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          {/* Elegant typography with better spacing and responsive text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="text-3xl md:text-4xl lg:text-6xl text-[#333] font-serif mb-6 leading-tight tracking-tight"
          >
            <span className="block">Polish Your Look,</span>
            <span className="block">Perfect Your Nails.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-[#555] mb-8 max-w-xl mx-auto font-light"
          >
            Experience premium nail care in a relaxing and luxurious
            environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/book">
              <button
                onClick={scrollToTop}
                className="px-8 py-3 text-base md:text-lg bg-[#8A192C] text-white rounded-sm shadow-lg hover:bg-[#9E2A3C] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book an Appointment
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
