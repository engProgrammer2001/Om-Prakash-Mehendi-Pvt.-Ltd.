import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServiceMenu = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <nav className="bg-[#27214e] border-b border-[#ff6b3e] text-white px-4 py-2">
      {/* Navbar container */}
      <div className="flex justify-between items-center lg:gap-8">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/Logo/logo.png"
            className="w-24 rounded-full"
            alt="logo_image"
          />
        </Link>

        {/* Navbar links and buttons container for large devices */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full">
          {/* Navbar links */}
          <ul className="flex gap-8 font-bold text-lg">
            <li>
              <Link to="/" className="hover:text-[#27214e]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#27214e]">
                About
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleServiceMenu}
                className="hover:text-[#27214e] flex items-center"
              >
                <Link to={"/service"}>Service </Link>
                <span>
                  <IoMdArrowDropdown className="text-3xl" />
                </span>
              </button>
              {/* Sub-menu for Service */}
              {isServiceOpen && (
                <ul className="absolute text-sm w-64 left-0 bg-[#27214e] mt-1 border-2 border-[#ff6b3e] rounded shadow-lg z-50">
                  <li>
                    <Link
                      to="/service-details/1"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Bridal Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/2"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Party Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/3"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Dulha Mehendi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/4"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Guest Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/5"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Engagement Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/6"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Luxury Heavy Bridal Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/7"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Baby Shower Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/8"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Normal Hand Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/9"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Feet Design Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/10"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Dulha Dulhan Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/11"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Festival Mehandi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details/12"
                      className="block px-4 py-2 hover:bg-[#ff6b3e]"
                    >
                      Arabian design
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#27214e]">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#27214e]">
                Contact
              </Link>
            </li>
          </ul>
          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-[#ff6b3e] via-[#f7c16a] to-[#b5d6e0] text-slate-900 font-semibold px-4 py-2 rounded">
              <Link to="/refer" className="hover:text-gray-300">
                Refer Friends
              </Link>
            </button>
            <button className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded">
              <Link to="/pay-now" className="hover:text-gray-300">
                Pay Now
              </Link>
            </button>
          </div>
        </div>
        {/* Toggle button for mobile devices */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#ff6b3e] text-4xl"
        >
          ☰
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="flex-col gap-4 flex sm:hidden mt-2">
          <li className="bg-orange-500 rounded-lg px-4 font-bold">
            <Link to="/" className="block py-2 hover:text-[#27214e] ">
              Home
            </Link>
          </li>
          <li className="bg-orange-500 rounded-lg px-4 font-bold">
            <Link to="/about" className="block py-2 hover:text-[#27214e]">
              About
            </Link>
          </li>
          <li className="relative bg-orange-500 rounded-lg px-4 font-bold">
            <button
              onClick={toggleServiceMenu}
              className="block py-2 hover:text-[#27214e]"
            >
              Service
            </button>
            {isServiceOpen && (
              <ul className="absolute text-sm w-64 left-0 bg-[#27214e] mt-1 border-2 border-[#ff6b3e] rounded shadow-lg z-50">
                <li>
                  <Link
                    to="/service-details/1"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Bridal Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/2"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Party Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/3"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Dulha Mehendi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/4"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Guest Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/5"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Engagement Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/6"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Luxury Heavy Bridal Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/7"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Baby Shower Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/8"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Normal Hand Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/9"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Feet Design Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/10"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Dulha Dulhan Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/11"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Festival Mehandi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details/12"
                    className="block px-4 py-2 hover:bg-[#ff6b3e]"
                  >
                    Arabian design
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="bg-orange-500 rounded-lg px-4 font-bold">
            <Link to="/gallery" className="block py-2 hover:text-[#27214e]">
              Gallery
            </Link>
          </li>
          <li className="bg-orange-500 rounded-lg px-4 font-bold">
            <Link to="/contact" className="block py-2 hover:text-[#27214e]">
              Contact
            </Link>
          </li>
          <li>
            <button className="w-full block bg-gradient-to-r from-red-400 via-blue-900 to-purple-600 text-white px-4 py-2 rounded">
              <Link to="/refer" className="hover:text-gray-300">
                Refer Friends
              </Link>
            </button>
          </li>
          <li>
            <button className="w-full block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded">
              <Link to="/pay-now" className="hover:text-gray-300">
                Pay Now
              </Link>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
