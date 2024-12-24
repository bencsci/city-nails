import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1640px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold text-[#8A192C]">
        <Link to="/">CITY NAILS</Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="p-4 font-semibold hover:text-[#8A192C]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#8A192C] border-b-2 border-[#8A192C]" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-4 font-semibold hover:text-[#8A192C]">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#8A192C] border-b-2 border-[#8A192C]" : ""
            }
          >
            Services
          </NavLink>
        </li>
        <li className="p-4 font-semibold hover:text-[#8A192C]">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#8A192C] border-b-2 border-[#8A192C]" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li className="p-4 font-semibold hover:text-[#8A192C]">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#8A192C] border-b-2 border-[#8A192C]" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "z-50 fixed left-0 top-0 w-[60%] border-r h-full border-r-white-500 bg-[#ffffff] ease-in-out duration-500"
            : "fixed left-[-100%] ease-out duration-100"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#8A192C] m-4">
          CITY NAILS
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-x-gray-800 font-semibold hover:text-[#8A192C]">
            <NavLink
              to="/"
              onClick={handleNav}
              className={({ isActive }) => (isActive ? "text-[#8A192C]" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="p-4 border-b border-x-gray-800 font-semibold hover:text-[#8A192C]">
            <NavLink
              to="/services"
              onClick={handleNav}
              className={({ isActive }) => (isActive ? "text-[#8A192C]" : "")}
            >
              Services
            </NavLink>
          </li>
          <li className="p-4 border-b border-x-gray-800 font-semibold hover:text-[#8A192C]">
            <NavLink
              to="/about"
              onClick={handleNav}
              className={({ isActive }) => (isActive ? "text-[#8A192C]" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="p-4 border-b border-x-gray-800 font-semibold hover:text-[#8A192C]">
            <NavLink
              to="/contact"
              onClick={handleNav}
              className={({ isActive }) => (isActive ? "text-[#8A192C]" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
