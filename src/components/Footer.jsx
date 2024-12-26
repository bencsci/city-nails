import React from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <footer className="p-5 md:p-10">
      <motion.div
        className="md:grid md:grid-cols-2 md:pl-36"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5, // Faster animation for entire column
          ease: "easeInOut",
        }}
        viewport={{ once: true }} // Ensures animation happens once
      >
        {/* Contact Us Column */}
        <motion.div
          className="md:pl-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 50,
          }}
          viewport={{ once: true }} // Ensures animation happens once
        >
          <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
          <ul>
            <li className="flex gap-5 p-1">
              <span className="font-bold w-20">Hours:</span>
              <span>Mon - Sat: 9AM-6PM</span>
            </li>
            <li className="flex gap-5 p-1">
              <span className="font-bold w-20">Phone:</span>
              <a href="tel:9022703665" className="hover:text-[#8A192C]">
                (902) 270-3665
              </a>
            </li>
            <li className="flex gap-5 p-1">
              <span className="font-bold w-20">Email:</span>
              <a
                href="mailto:CityNails@gmail.com"
                className="hover:text-[#8A192C]"
              >
                contact.citynails@gmail.com
              </a>
            </li>
            <li className="flex gap-5 p-1">
              <span className="font-bold w-20">Address:</span>
              <span>272 Commercial Street</span>
            </li>
          </ul>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            bounce: 0.5,
            stiffness: 50,
          }}
          viewport={{ once: true }} // Ensures animation happens once
        >
          <h3 className="pt-8 md:pt-0  text-lg font-bold mb-4 uppercase">
            Quick Links
          </h3>
          <ul className="font-bold">
            <li className="p-1 hover:text-[#8A192C] cursor-pointer">
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li className="p-1 hover:text-[#8A192C] cursor-pointer">
              <NavLink to="/services" onClick={scrollToTop}>
                Services
              </NavLink>
            </li>
            <li className="p-1 hover:text-[#8A192C] cursor-pointer">
              <NavLink to="/about" onClick={scrollToTop}>
                About
              </NavLink>
            </li>
            <li className="p-1 hover:text-[#8A192C] cursor-pointer">
              <NavLink to="/book" onClick={scrollToTop}>
                Book
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-10 text-center border-t border-gray-300 pt-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          bounce: 0.5,
          stiffness: 50,
        }}
        viewport={{ once: true }} // Ensures animation happens once
      >
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} City Nails
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
