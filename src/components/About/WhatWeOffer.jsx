import React from "react";
import about2 from "../../assets/about2.jpg";

const WhatWeOffer = () => {
  return (
    <section className="p-5 bg-[#F3F4F9] lg:mx-32">
      <div className="md:grid md:grid-cols-2">
        <div>
          <img
            src={about2}
            className="px-24 md:px-8 md:pt-14 lg:pt-0 hidden md:block"
          />
        </div>
        <div className="lg:mt-20">
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
            <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded shadow-[4px_4px_0_0_rgb(156,163,175)] hover:shadow-[2px_2px_0_0_rgb(156,163,175)] hover:translate-x-1 hover:translate-y-1 transition-transform">
              Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
