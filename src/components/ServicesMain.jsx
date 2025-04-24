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
    <div className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-12 bg-[#8A192C] mr-4"></div>
            <h2 className="text-sm uppercase tracking-widest text-[#8A192C] font-medium">
              Our Services
            </h2>
            <div className="h-[1px] w-12 bg-[#8A192C] ml-4"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-center text-[#333] mb-6">
            Professional Nail Care
          </h1>
          <p className="text-center text-[#555] max-w-2xl mb-12">
            Experience our premium nail services tailored to meet your needs.
            From classic manicures to artistic nail designs, our skilled
            technicians ensure you leave with perfectly polished nails.
          </p>

          {/* Banner image with elegant styling */}
          <motion.div
            className="relative w-full max-w-5xl overflow-hidden mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8A192C]/5 absolute -bottom-4 -right-4 w-full h-full rounded-lg"></div>
            <img
              src={Banner}
              alt="Nail services showcase"
              className="w-full h-auto object-cover rounded-lg shadow-md relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Services section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-serif text-[#333] text-center mb-12">
            Service <span className="text-[#8A192C]">Menu</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white p-6 border border-gray-100 hover:border-[#8A192C]/20 rounded-sm shadow-sm hover:shadow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-medium text-[#333] group-hover:text-[#8A192C] transition-colors">
                    {service.name}
                  </h4>
                  <span className="font-serif text-lg text-[#8A192C]">
                    ${service.price}
                  </span>
                </div>

                {service.details && (
                  <p className="text-sm text-[#8A192C] mb-2 italic">
                    {service.details}
                  </p>
                )}

                <p className="text-sm text-[#666] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action section */}
        <motion.div
          className="bg-white py-16 px-8 rounded-sm shadow-sm border border-gray-100 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-[#333] mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto mb-8">
            Schedule an appointment with us today and enjoy a relaxing nail care
            experience tailored just for you.
          </p>
          <Link to="/book">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center px-8 py-3 bg-[#8A192C] text-white rounded-sm shadow-lg hover:bg-[#9E2A3C] transition-all duration-300"
            >
              <span className="font-medium">Book an Appointment</span>
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
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesMain;
