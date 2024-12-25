import React from "react";

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
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
          >
            <p className="text-lg text-gray-700 italic mb-4">
              "{testimonial.text}"
            </p>
            <h3 className="text-md font-semibold text-[#8A192C]">
              - {testimonial.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
