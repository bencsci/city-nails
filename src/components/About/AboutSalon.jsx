import React from "react";
import about1 from "../../assets/about1.jpg";
import { motion } from "motion/react";

const AboutSalon = () => {
  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
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
            Our Story
          </h2>
          <div className="h-[1px] w-8 md:w-12 bg-[#8A192C] ml-3 md:ml-4"></div>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-center text-[#333] mb-10 md:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About{" "}
          <span className="text-[#8A192C]">
            City Nails
          </span>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image for mobile */}
          <motion.div
            className="relative block md:hidden mb-6 mx-auto max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8A192C]/5 absolute -top-3 -right-3 w-full h-full rounded-lg"></div>
            <img
              src={about1}
              alt="City Nails Salon"
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
            />
          </motion.div>

          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="px-1 sm:px-2"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-light text-[#333] mb-4 md:mb-6 leading-tight">
              Welcome to Our <span className="text-[#8A192C]">Salon</span>
            </h3>

            <div className="w-12 md:w-16 h-0.5 bg-[#8A192C] mb-6 md:mb-8"></div>

            <p className="text-base md:text-lg text-[#555] mb-5 md:mb-6 leading-relaxed font-light">
              City Nails is dedicated to providing a relaxing and welcoming
              environment where our clients can enjoy high-quality nail
              services. Our experienced technicians use the latest techniques
              and top-of-the-line products to ensure you leave feeling pampered
              and polished.
            </p>

            <p className="text-sm md:text-base text-[#666] mb-6 md:mb-8 leading-relaxed">
              We are committed to using only the highest-quality products to
              ensure beautiful, long-lasting results. Our goal is to provide
              each client with the best experience possible. Relaxing,
              enjoyable, and tailored to your unique needs.
            </p>

            <ul className="space-y-2 md:space-y-3 mb-1">
              {[
                "Premium Products",
                "Expert Technicians",
                "Luxurious Experience",
                "Artistic Designs",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-[#333] text-sm md:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A192C] mr-3 flex-shrink-0"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8A192C]/5 absolute -top-4 -right-4 w-full h-full rounded-lg"></div>
            <img
              src={about1}
              alt="City Nails Salon"
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSalon;
