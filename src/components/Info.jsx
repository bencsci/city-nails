import React from "react";
import Temp from "../assets/temp.jpg";

const Info = () => {
  return (
    <div className="w-full bg-white lg:py-32 md:py-28 sm:py-12 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[600px] mx-auto my-4 rounded-md shadow-lg"
          src={Temp}
          alt="Nail Salon"
        />
        <div className="flex flex-col justify-center md:px-6 font-serif">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold py-2">
            PROFESSIONAL NAIL CARE
          </h1>
          <p>
            Welcome to City Nails, your downtown North Sydney destination for
            professional nail care. Relax and enjoy our range of services, from
            classic manicures to stunning nail art, all tailored to elevate your
            beauty experience.
          </p>
          <button className="bg-[#8A192C] text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
