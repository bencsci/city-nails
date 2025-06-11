import React from "react";
import Temp from "../assets/temp.jpg";
import Store from "../assets/Store1.jpg";
import { Link } from "react-router";
import { motion } from "motion/react";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Info = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section title with decorative element */}
          <motion.div
            className="flex items-center justify-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-[1px] w-12 bg-[#8A192C] mr-4"></div>
            <h2 className="text-sm md:text-base uppercase tracking-widest text-[#8A192C] font-medium">
              About Us
            </h2>
            <div className="h-[1px] w-12 bg-[#8A192C] ml-4"></div>
          </motion.div>

          {/* Content grid with improved spacing */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Left side - Image with styled container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-[#8A192C]/5 absolute -top-4 -left-4 w-full h-full rounded-lg"></div>
              <img
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg relative z-10"
                src={Store}
                alt="City Nails Salon Interior"
              />
            </motion.div>

            {/* Right side - Content with better typography */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#8A192C] font-medium mb-2">Our Salon</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#333] mb-6 leading-tight">
                Discover the City Nails Experience
              </h3>

              <div className="w-16 h-1 bg-[#8A192C] mb-6"></div>

              <p className="text-lg text-[#555] mb-8 leading-relaxed font-light">
                At City Nails, we take pride in offering a cozy, relaxing
                environment where beauty meets precision. From custom nail art
                to high-quality manicures, our professional team ensures every
                service is crafted to perfection. Let us make your next visit
                unforgettable.
              </p>

              <div className="mt-4">
                <Link to="/about">
                  <button
                    onClick={scrollToTop}
                    className="group inline-flex items-center px-8 py-3 bg-transparent text-[#8A192C] border border-[#8A192C] rounded-sm hover:bg-[#8A192C] hover:text-white transition-all duration-300"
                  >
                    <span className="font-medium">Read More About Us</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
