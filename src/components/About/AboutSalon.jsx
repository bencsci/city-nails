import React from "react";
import about1 from "../../assets/about1.jpg";
import { motion } from "motion/react";

const AboutSalon = () => {
  return (
    <section className="p-5 lg:mx-32">
      <div className="md:grid md:grid-cols-2 mt-10">
        <motion.div
          className="lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5, // Faster duration
            ease: "easeInOut", // Bouncy effect with easeInOut
            bounce: 0.5, // Adds more bounce
            stiffness: 50, // Controls the bounce intensity
            delay: 0.5,
          }}
        >
          <h2 className="text-center text-3xl font-semibold mb-4 text-[#8A192C]">
            About Our Nail Salon 💅
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            City Nails is dedicated to providing a relaxing and welcoming
            environment 🧖‍♀️ where our clients can enjoy high-quality nail
            services. Our experienced technicians use the latest techniques and
            top-of-the-line products to ensure you leave feeling pampered and
            polished 💖.
          </p>
          <p className="text-md text-gray-500 leading-relaxed py-5">
            We are committed to using only the highest-quality products to
            ensure beautiful, long-lasting results. Our goal is to provide each
            client with the best experience possible. Relaxing, enjoyable, and
            tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          className="px-24 md:px-8 md:pt-14 lg:pt-0 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5, // Faster duration
            ease: "easeInOut", // Bouncy effect with easeInOut
            bounce: 0.5, // Adds more bounce
            stiffness: 50, // Controls the bounce intensity
            delay: 0.5,
          }}
        >
          <img loading="eager" src={about1} alt="About Us" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSalon;
