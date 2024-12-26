import React from "react";
import Banner from "../assets/servicesBanner.jpg";
import { Link } from "react-router";
import { motion } from "motion/react";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const services = [
  {
    name: "Acrylic Nails Tips",
    price: 45,
    description:
      "Durable and stylish acrylic nail tips for a perfect fit and look.",
  },
  {
    name: "Nails Fills",
    price: 30,
    details: "With Shellac Color - $50",
    description:
      "Refill your acrylic nails with a fresh look and Shellac color option.",
  },
  {
    name: "Gel Nails",
    price: 40,
    details: "With Shellac Color Gel - $60",
    description:
      "Long-lasting gel nails with a shiny finish, including color options.",
  },
  {
    name: "Shellac Nails Color",
    price: 45,
    description:
      "A premium long-lasting nail polish that offers vibrant colors and durability.",
  },
  {
    name: "Solar Nails",
    price: 45,
    description:
      "A lightweight and natural-looking alternative to acrylic nails.",
  },
  {
    name: "Nail Overlay",
    price: 35,
    description:
      "A smooth and natural enhancement over your natural nails for added strength.",
  },
  {
    name: "Manicure",
    price: 20,
    description:
      "A simple yet elegant manicure that includes shaping, trimming, and a fresh coat of polish.",
  },
  {
    name: "Airbrush Toe Nails",
    price: 25,
    description: "Creative and beautiful airbrush designs for your toenails.",
  },
  {
    name: "Nail Soak Off",
    price: "10 to $15",
    description:
      "Removal of acrylic or gel nails with a gentle soak-off process.",
  },
  {
    name: "Nails Cut Down",
    price: 4,
    description: "Shorten and shape your nails to the desired length.",
  },
  {
    name: "Nail Repair",
    price: 7,
    description: "Quick and efficient repair for broken or damaged nails.",
  },
  {
    name: "French Manicure",
    price: 27,
    description:
      "A classic and timeless nail style with white tips and a natural pink base.",
  },
  {
    name: "Polish Change",
    price: 25,
    description: "Refresh your nails with a new color of your choice.",
  },
  {
    name: "Pedicure",
    price: "40 to $50",
    description:
      "A relaxing pedicure to pamper your feet with nail care and a fresh coat of polish.",
  },
];

const ServicesMain = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#8A192C] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1, // Faster duration
          ease: "easeInOut", // Bouncy effect with easeInOut
          bounce: 0.5, // Adds more bounce
          stiffness: 50, // Controls the bounce intensity
          delay: 0.5,
        }}
      >
        ✨ Our Services ✨
      </motion.h1>
      <motion.img
        src={Banner}
        className="mt-10 w-full rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1, // Faster duration
          ease: "easeInOut", // Bouncy effect with easeInOut
          bounce: 0.5, // Adds more bounce
          stiffness: 50, // Controls the bounce intensity
          delay: 0.65,
        }}
      />
      <motion.div
        className="border-t-2 border-[#8A192C] my-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1, // Faster duration
          ease: "easeInOut", // Bouncy effect with easeInOut
          bounce: 0.5, // Adds more bounce
          stiffness: 50, // Controls the bounce intensity
          delay: 0.65,
        }}
      ></motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.75,
        }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-[#8A192C]">
              {service.name}
            </h3>
            <p className="text-lg text-gray-700">{`$${service.price}`}</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">
              {service.details ? service.details : ""}
            </p>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Book an Appointment Section */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.75,
        }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#8A192C] mb-4">
          Ready to pamper yourself?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Schedule an appointment with us today and enjoy a relaxing nail care
          experience.
        </p>
        <Link to="/book">
          <button
            onClick={scrollToTop}
            className="border-2 border-[#8A192C] text-[#8A192C] font-bold py-2 px-6 hover:bg-[#8A192C] hover:text-white transition duration-300"
          >
            Book an Appointment
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesMain;
