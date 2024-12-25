import React from "react";
import { NavLink } from "react-router";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="p-5 md:p-10">
      <div className="md:grid md:grid-cols-2 md:pl-36">
        <div>
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
                CityNails@gmail.com
              </a>
            </li>
            <li className="flex gap-5 p-1">
              <span className="font-bold w-20">Address:</span>
              <span>272 Commercial Street</span>
            </li>
          </ul>
        </div>

        <div className="mt-5 md:mt-0 md:pl-32">
          <h3 className="text-lg font-bold mb-4 uppercase">Quick Links</h3>
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
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-300 pt-5">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} City Nails
        </p>
      </div>
    </footer>
  );
};

export default Footer;
