import React from "react";
import { NavLink } from "react-router";
import { motion } from "motion/react";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and tagline */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl font-serif text-[#8A192C] mb-3">
              CITY NAILS
            </h2>
            <p className="text-sm text-[#555] tracking-wider max-w-md mx-auto">
              Elevating your nail care experience with artistry and attention to
              detail
            </p>
          </motion.div>
        </div>

        {/* Footer main content */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#333] after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#8A192C] after:mt-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiClock className="text-[#8A192C] mt-1 mr-3" />
                <div>
                  <span className="block text-sm font-medium text-[#333]">
                    Hours
                  </span>
                  <span className="block text-sm text-[#555]">
                    Mon - Fri: 9:30AM-7PM
                    <br />
                    Sat: 9:30AM-6PM
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <FiPhone className="text-[#8A192C] mt-1 mr-3" />
                <div>
                  <span className="block text-sm font-medium text-[#333]">
                    Phone
                  </span>
                  <a
                    href="tel:9022703665"
                    className="block text-sm text-[#555] hover:text-[#8A192C] transition-colors"
                  >
                    (902) 270-3665
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FiMapPin className="text-[#8A192C] mt-1 mr-3" />
                <div>
                  <span className="block text-sm font-medium text-[#333]">
                    Location
                  </span>
                  <span className="block text-sm text-[#555]">
                    272 Commercial Street
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#333] after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#8A192C] after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Book"].map((item) => (
                <li key={item} className="text-sm">
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={scrollToTop}
                    className={({ isActive }) =>
                      `block transition-colors hover:text-[#8A192C] ${
                        isActive ? "text-[#8A192C]" : "text-[#555]"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-widest font-medium mb-6 text-[#333] after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#8A192C] after:mt-2">
              Opening Hours
            </h3>
            <ul className="space-y-2">
              {[
                { day: "Monday", hours: "9:30 AM - 7:00 PM" },
                { day: "Tuesday", hours: "9:30 AM - 7:00 PM" },
                { day: "Wednesday", hours: "9:30 AM - 7:00 PM" },
                { day: "Thursday", hours: "9:30 AM - 7:00 PM" },
                { day: "Friday", hours: "9:30 AM - 7:00 PM" },
                { day: "Saturday", hours: "9:30 AM - 6:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-[#333]">{item.day}</span>
                  <span className="text-[#555]">{item.hours}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-xs text-[#777]">
            &copy; {new Date().getFullYear()} City Nails. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
