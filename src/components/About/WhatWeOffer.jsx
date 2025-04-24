import React from "react";
import about2 from "../../assets/Store3.jpg";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const WhatWeOffer = () => {
  const services = [
    "Luxury Manicures & Pedicures",
    "Acrylic & Gel Nail Extensions",
    "Stunning Nail Art & Designs",
    "Shellac & Long-lasting Polish",
    "Hand & Foot Treatments",
    "Premium Nail Care Products",
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Mobile image (shown at top on small screens) */}
          <motion.div
            className="relative block md:hidden mb-8 mx-auto max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8A192C]/5 absolute -bottom-3 -left-3 w-full h-full rounded-lg"></div>
            <img
              src={about2}
              alt="City Nails Services"
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
            />
          </motion.div>

          {/* Left side - Image (hidden on mobile) */}
          <motion.div
            className="relative order-2 md:order-1 hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8A192C]/5 absolute -bottom-4 -left-4 w-full h-full rounded-lg"></div>
            <img
              src={about2}
              alt="City Nails Services"
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
            />
          </motion.div>

          {/* Right side - Services list */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="px-1 sm:px-2"
            >
              <h3 className="text-xl sm:text-2xl font-serif font-light text-[#333] mb-4 md:mb-6 leading-tight">
                Our <span className="text-[#8A192C]">Services</span>
              </h3>

              <div className="w-12 md:w-16 h-0.5 bg-[#8A192C] mb-6 md:mb-8"></div>

              <p className="text-sm md:text-base text-[#555] mb-6 md:mb-8 leading-relaxed">
                From classic manicures and pedicures to stunning acrylics and
                gel designs, we offer a wide range of services to suit your
                needs. Whether you're looking for a quick touch-up or a full set
                of nails, City Nails has you covered with exceptional service.
              </p>

              <div className="mb-8 md:mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FiCheckCircle className="text-[#8A192C] mt-0.5 mr-2 md:mt-1 md:mr-3 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-[#333] text-sm md:text-base">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link to="/services" className="inline-block">
                <button
                  onClick={scrollToTop}
                  className="group inline-flex items-center px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-[#8A192C] border border-[#8A192C] rounded-sm hover:bg-[#8A192C] hover:text-white transition-all duration-300 text-sm md:text-base"
                >
                  <span className="font-medium">Explore Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
