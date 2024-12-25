import React from "react";
import about2 from "../../assets/about2.jpg";
import { Link } from "react-router";
import { motion } from "framer-motion"; // Correct import

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const WhatWeOffer = () => {
  return (
    <section className="p-5 bg-[#F3F4F9] lg:mx-32">
      <div className="md:grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 50,
            delay: 0.75,
          }}
        >
          <img
            src={about2}
            loading="eager"
            className="px-24 md:px-8 md:pt-14 lg:pt-0 hidden md:block"
          />
        </motion.div>

        <motion.div
          className="lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 50,
            delay: 0.75,
          }}
        >
          <h2 className="text-center text-3xl font-semibold mb-4 text-[#8A192C]">
            What We Offer 🌸
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            From classic manicures and pedicures to stunning acrylics and gel
            designs, we offer a wide range of services to suit your needs.
            Whether you're looking for a quick touch-up or a full set of nails,
            City Nails has you covered 🌟.
          </p>

          <p className="text-md text-gray-500 leading-relaxed py-5">
            Check out our full range of services and treatments to find the
            perfect pampering experience for you. Click here to explore all that
            we offer!
            <span className="animate-bounce inline-block">👇</span>
          </p>

          <div className="flex justify-center">
            <Link to="/services">
              <button
                onClick={scrollToTop}
                className="border-2 border-[#808080] text-[#808080] font-bold py-2 px-6 hover:bg-[#808080] hover:text-white hover:shadow-md transition duration-300"
              >
                See Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
