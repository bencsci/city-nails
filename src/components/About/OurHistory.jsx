import React from "react";
import about3 from "../../assets/about3.jpg";
import { motion } from "framer-motion"; // Correct import

const OurHistory = () => {
  return (
    <section className="p-5 lg:mx-32">
      <div className="md:grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 50,
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl font-semibold mb-4 text-[#8A192C]">
            Our History 🕰️
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            City Nails has been serving the North Sydney community with
            exceptional nail care services for over a decade 💅. Our passion for
            beauty and commitment to customer satisfaction have made us a
            trusted name in nail care 🌟.
          </p>

          <p className="text-md text-gray-500 leading-relaxed py-5">
            Over the years, we've built a reputation for providing exceptional
            nail services and a welcoming atmosphere. Our skilled team is
            dedicated to helping each customer look and feel their best, one
            nail at a time. Join us in celebrating years of beautiful nails and
            happy customers! 🎉
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 50,
          }}
          viewport={{ once: true }}
        >
          <img
            src={about3}
            loading="eager"
            className="px-24 md:px-8 md:pt-16 lg:pt-0 hidden md:block"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurHistory;
