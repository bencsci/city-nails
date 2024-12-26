import React from "react";
import { motion } from "motion/react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Deborah M.",
      text: "Friendly service. Very professional, and my nails are beautiful. Highly recommend them. ❤️",
    },
    {
      id: 2,
      name: "Caroline G.",
      text: "Massage chairs while you get your pedicure. Beautiful couple who look after you very well. 💆‍♀️",
    },
    {
      id: 3,
      name: "T. Fielder",
      text: "Very professional, friendly, perfect and super value! 🌟",
    },
  ];

  return (
    <section className="p-5 lg:px-32">
      <h2 className="text-center text-3xl font-semibold mb-8 text-[#8A192C]">
        What Our Clients Say 💬
      </h2>
      <div className="lg:grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.2, // Delay each card slightly for sequential animation
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            {/* Card content (text) */}
            <motion.p
              className="text-lg text-gray-700 italic mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3, // Text fades in after the card with some delay
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              "{testimonial.text}"
            </motion.p>
            <motion.h3
              className="text-md font-semibold text-[#8A192C]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5, // Name fades in after the text
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              - {testimonial.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
