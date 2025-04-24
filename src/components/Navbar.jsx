import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router";
import { motion } from "motion/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#8A192C]">
              CITY NAILS
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {["Home", "Services", "About"].map((item, i) => (
            <motion.div
              onClick={scrollToTop}
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-2 mx-1 text-sm tracking-wide uppercase font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#8A192C] border-b-2 border-[#8A192C]"
                      : "text-[#333] hover:text-[#8A192C]"
                  }`
                }
                onClick={scrollToTop}
              >
                {item}
              </NavLink>
            </motion.div>
          ))}

          {/* Book button */}
          <motion.div
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link to="/book">
              <button className="ml-4 px-5 py-2 bg-[#8A192C] text-white rounded-sm text-sm uppercase tracking-wide font-medium hover:bg-[#9E2A3C] transition-colors duration-300 shadow-sm hover:shadow">
                Book Now
              </button>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="block md:hidden">
          <button className="p-2 rounded-full hover:bg-gray-100/80 transition-colors">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 bg-black/50 z-50 ${nav ? "block" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: nav ? 1 : 0 }}
        onClick={() => setNav(false)}
      >
        <motion.div
          className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-xl p-6 overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: nav ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif text-[#8A192C]">CITY NAILS</h2>
            <button
              onClick={handleNav}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {["Home", "Services", "About"].map((item, i) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => {
                  handleNav();
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-sm text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#8A192C] bg-[#8A192C]/5"
                      : "text-[#333] hover:bg-gray-50"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}

            <Link
              to="/book"
              onClick={() => {
                handleNav();
                scrollToTop();
              }}
              className="mt-4 px-4 py-3 bg-[#8A192C] text-white rounded-sm text-center shadow-sm"
            >
              Book Now
            </Link>
          </nav>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
