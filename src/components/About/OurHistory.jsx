import React from "react";
import about3 from "../../assets/Founders.jpg";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const OurHistory = () => {
  return (
    <section className="py-12 md:py-16 pb-16 md:pb-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Mobile image (shown at top on small screens) */}
          <motion.div
            className="relative block md:hidden mb-8 mx-auto max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8A192C]/5 absolute -top-3 -right-3 w-full h-full rounded-lg"></div>
            <img
              src={about3}
              alt="Hung and Be - Founders of City Nails"
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
            />
          </motion.div>

          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="px-1 sm:px-2"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-light text-[#333] mb-4 md:mb-6 leading-tight">
              Our <span className="text-[#8A192C]">Journey</span>
            </h3>

            <div className="w-12 md:w-16 h-0.5 bg-[#8A192C] mb-6 md:mb-8"></div>

            <p className="text-sm md:text-base text-[#555] mb-5 md:mb-6 leading-relaxed">
              Founded by husband and wife team{" "}
              <span className="text-[#8A192C] font-medium">Hung and Be</span>,
              City Nails has been serving the North Sydney community with
              exceptional nail care services for over a decade. Their passion
              for beauty and commitment to customer satisfaction have made the
              salon a trusted name in nail care.
            </p>

            <p className="text-sm md:text-base text-[#555] mb-6 md:mb-8 leading-relaxed">
              What began as a small family business has grown into a beloved
              establishment where clients return time and again for quality
              services and warm atmosphere. Hung and Be have built a loyal
              clientele who appreciate their dedication to excellence and
              personalized attention to every detail.
            </p>

            <div className="mb-6 md:mb-8 italic border-l-2 border-[#8A192C] pl-3 md:pl-4 py-2 text-sm md:text-base text-[#555]">
              "Our goal has always been to create a space where clients can
              relax, feel special, and leave with beautiful nails that boost
              their confidence."
            </div>
          </motion.div>

          {/* Right side - Image (hidden on mobile) */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#8A192C]/5 absolute -top-4 -right-4 w-full h-full rounded-lg"></div>
            <img
              src={about3}
              alt="Hung and Be - Founders of City Nails"
              className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
