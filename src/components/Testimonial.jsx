import React from "react";
import { motion } from "motion/react";
import { FiStar } from "react-icons/fi";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Deborah M.",
      text: "Friendly service. Very professional, and my nails are beautiful. Highly recommend them.",
      stars: 5,
    },
    {
      id: 2,
      name: "Caroline G.",
      text: "Massage chairs while you get your pedicure. Beautiful couple who look after you very well.",
      stars: 5,
    },
    {
      id: 3,
      name: "T. Fielder",
      text: "Very professional, friendly, perfect and super value!",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title with decorative element */}
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
              Testimonials
            </h2>
            <div className="h-[1px] w-12 bg-[#8A192C] ml-4"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-center text-[#333] mb-4">
            What Our Clients Say
          </h3>
          <p className="text-center text-[#555] max-w-xl">
            Don't just take our word for it. Hear what our clients have to say
            about their experience with us.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FiStar key={i} className="text-[#8A192C] fill-[#8A192C]" />
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-[#555] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="mt-auto">
                <h4 className="font-medium text-[#333]">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
