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
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 3,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1500, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const CarouselComponent = ({ deviceType }) => (
  <div className="bg-[#F8F8F8] py-10">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        bounce: 0.5,
        stiffness: 50,
      }}
      viewport={{ once: true }}
      className="text-center font-bold font-serif text-4xl text-[#333] mb-10"
    >
      Crafted with Perfection
    </motion.p>
    <div className="pb-10">
      <Carousel
        className="mx-auto"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} 
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
      >
        {/* Image Slide 1 */}
        <div className="p-5 md:p-0 w-full sm:w-[300px] lg:w-[400px] mx-auto">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
            src={Nails1}
            alt="Nails1"
          />
        </div>
        {/* Image Slide 2 */}
        <div className="p-5 md:p-0 w-full sm:w-[300px] lg:w-[400px] mx-auto">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
            src={Nails2}
            alt="Nails2"
          />
        </div>
        {/* Image Slide 3 */}
        <div className="p-5 md:p-0 w-full sm:w-[300px] lg:w-[400px] mx-auto">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
            src={Nails3}
            alt="Nails3"
          />
        </div>
        {/* Image Slide 4 */}
        <div className="p-5 md:p-0 w-full sm:w-[300px] lg:w-[400px] mx-auto">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
            src={Nails4}
            alt="Nails4"
          />
        </div>
        {/* Image Slide 5 */}
        <div className="p-5 md:p-0 w-full sm:w-[300px] lg:w-[400px] mx-auto">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
            src={Nails5}
            alt="Nails5"
          />
        </div>
        {/* Image Slide 6 */}
        <div className="p-5 md:p-0 w-full sm:w-[300px] lg:w-[400px] mx-auto">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
            src={Nails6}
            alt="Nails6"
          />
        </div>
      </Carousel>
    </div>
  </div>
);

export default CarouselComponent;
