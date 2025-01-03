import React from "react";
import Temp from "../assets/temp.jpg";
import { Link } from "react-router";
import { motion } from "motion/react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Info = () => {
  return (
    <div className="w-full bg-white lg:py-32 md:py-28 sm:py-12 px-4 pb-12">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <motion.img
          className="w-full mx-auto my-4 rounded-md shadow-xl object-cover"
          src={Temp}
          alt="Nail Salon"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 50,
          }}
          viewport={{ once: true }} 
        />

        <div className="flex flex-col justify-center md:px-6">
          <motion.h1
            className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold text-[#333] py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              bounce: 0.5,
              stiffness: 50,
            }}
            viewport={{ once: true }}
          >
            DISCOVER THE CITY NAILS EXPERIENCE
          </motion.h1>

          <motion.p
            className="text-lg text-[#555] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              bounce: 0.5,
              stiffness: 50,
            }}
            viewport={{ once: true }} 
          >
            At City Nails, we take pride in offering a luxurious, relaxing
            environment where beauty meets precision. From custom nail art to
            high-quality manicures, our professional team ensures every service
            is crafted to perfection. Let us make your next visit unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              bounce: 0.5,
              stiffness: 50,
            }}
            viewport={{ once: true }} 
          >
            <Link to="/about" className="flex justify-center">
              <button
                onClick={scrollToTop}
                className="border-2 border-black text-black font-bold py-2 px-6 hover:bg-black hover:text-white hover:shadow-md transition duration-300"
              >
                Read More About Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Info;
