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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1600 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1500, min: 600 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselComponent = ({ deviceType }) => (
  <div className="bg-[#EFCFE3]">
    <p className="text-center p-[5rem] font-bold font-serif text-4xl">
      Crafted with perfection.
    </p>
    <div className="pb-10">
      <Carousel
        className="lg:mx-[10rem] md:mx-[1rem] sm:mx-auto"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
      >
        <div className="size-80 sm:size-[300px] lg:size-96 mx-auto">
          <img
            className="w-full h-full object-cover border-white border-[20px]"
            src={Nails1}
            alt="Nails1"
          />
        </div>
        <div className="size-80 sm:size-[300px] lg:size-96 mx-auto">
          <img
            className="w-full h-full object-cover border-white border-[20px]"
            src={Nails2}
            alt="Nails2"
          />
        </div>
        <div className="size-80 sm:size-[300px] lg:size-96 mx-auto">
          <img
            className="w-full h-full object-cover border-white border-[20px]"
            src={Nails3}
            alt="Nails3"
          />
        </div>
        <div className="size-80 sm:size-[300px] lg:size-96 mx-auto">
          <img
            className="w-full h-full object-cover border-white border-[20px]"
            src={Nails4}
            alt="Nails4"
          />
        </div>
        <div className="size-80 sm:size-[300px] lg:size-96 mx-auto">
          <img
            className="w-full h-full object-cover border-white border-[20px]"
            src={Nails5}
            alt="Nails5"
          />
        </div>
        <div className="size-80 sm:size-[300px] lg:size-96 mx-auto">
          <img
            className="w-full h-full object-cover border-white border-[20px]"
            src={Nails6}
            alt="Nails6"
          />
        </div>
      </Carousel>
    </div>
  </div>
);

export default CarouselComponent;
