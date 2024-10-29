import React from "react";
import Front from "../assets/home_image.jpg";

const Hero = () => {
  return (
    <div className="grid place-items-center">
      {/* Wrapper for the image */}
      <div className="shadow-2xl mb-5 2xl:mx-36 xl:mx-30 lg:mx-18 md:mx-6 xl:h-[900px] h-auto sm:mx-4 relative">
        <img
          src={Front}
          className="xl:w-[1600px] xl:h-[900px] object-cover" // Set height to 900px and use object-cover
          alt="Hero"
        />
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
          <p className="2xl:p-20 md:p-15 sm:p-5 text-black 2xl:text-7xl md:text-5xl sm:text-3xl font-serif">
            Polish Your Look, <br />
            Perfect Your Nails.
          </p>
          <button className="bg-[#8A192C] text-white w-[200px] rounded-md font-medium my-6 py-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
