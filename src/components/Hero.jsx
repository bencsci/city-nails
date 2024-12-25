import React from "react";
import Front from "../assets/home_image.jpg";
import { Link } from "react-router";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Hero = () => {
  return (
    <div className="grid place-items-center">
      <div className="shadow-2xl mb-5 2xl:mx-36 xl:mx-30 lg:mx-18 md:mx-6 xl:h-[900px] h-auto sm:mx-4 relative">
        <img
          src={Front}
          className="xl:w-[1600px] xl:h-[900px] object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
          <p className="text-2xl md:text-3xl lg:text-5xl 2xl:p-20 md:p-15 sm:p-5 text-black font-serif">
            Polish Your Look, <br />
            Perfect Your Nails.
          </p>
          <Link to="/book">
            <button
              onClick={scrollToTop}
              className="border-2 border-[#8A192C] text-[#8A192C] font-bold py-2 px-6 hover:bg-[#8A192C] hover:text-white hover:shadow-md transition duration-300"
            >
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
