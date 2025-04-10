// Components/carousel.js

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Nails1 from "../assets/nails5.jpeg";
import Nails2 from "../assets/nails6.jpeg";
import Nails3 from "../assets/nails4.jpeg";
import Nails4 from "../assets/nails8.jpeg";
import Nails5 from "../assets/nails7.jpeg";
import Nails6 from "../assets/nails3.jpeg";
import { motion } from "motion/react";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 1800 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1800, min: 1024 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
};

// Custom Arrow Component
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 md:right-2 -translate-y-1/2 top-1/2 z-10 p-1.5 md:p-2.5 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 focus:outline-none"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#8A192C]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 md:left-2 -translate-y-1/2 top-1/2 z-10 p-1.5 md:p-2.5 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 focus:outline-none"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#8A192C]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

// Custom Dot Component
const CustomDot = ({ onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-2.5 h-2.5 mx-1 rounded-full transition-all duration-300 ${
        active ? "bg-[#8A192C] w-5" : "bg-[#8A192C]/30"
      }`}
      aria-label={active ? "Active slide" : "Slide"}
    />
  );
};

const CarouselComponent = ({ deviceType }) => (
  <section className="py-16 md:py-20 bg-[#FAFAFA]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section title with decorative element */}
      <motion.div
        className="flex items-center justify-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="h-[1px] w-8 md:w-12 bg-[#8A192C] mr-3 md:mr-4"></div>
        <h2 className="text-xs md:text-sm uppercase tracking-widest text-[#8A192C] font-medium">
          Our Gallery
        </h2>
        <div className="h-[1px] w-8 md:w-12 bg-[#8A192C] ml-3 md:ml-4"></div>
      </motion.div>

      <motion.h3
        className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-center text-[#333] mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Crafted with <span className="text-[#8A192C]">Perfection</span>
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="pb-6"
      >
        <Carousel
          className="mx-auto"
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          partialVisible={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          customDot={<CustomDot />}
          renderDotsOutside={false}
        >
          {[Nails1, Nails2, Nails3, Nails4, Nails5, Nails6].map(
            (image, index) => (
              <div key={index} className="px-2 sm:px-3 md:px-4 pb-2">
                <div className="bg-white p-2 md:p-3 rounded-sm shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-md">
                  <div className="aspect-w-4 aspect-h-5 overflow-hidden rounded-sm">
                    <img
                      src={image}
                      alt={`Nail Design ${index + 1}`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>
      </motion.div>

      <div className="text-center mt-8">
        <p className="text-sm md:text-base text-[#555] max-w-2xl mx-auto">
          Experience our wonderful nail designs created with precision and care.
          Each design showcases our dedication to quality and artistry.
        </p>
      </div>
    </div>
  </section>
);

export default CarouselComponent;
