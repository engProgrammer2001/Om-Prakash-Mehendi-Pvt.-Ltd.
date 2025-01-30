import React from "react";
import { Link } from "react-router-dom";
import AboutCompo from "../components/AboutComp/AboutComp";
import Countup from "../components/Countup/Countup";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-72 lg:h-[70vh]">
        <img
          src="/assets/about/slider4.jpg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </nav>
          <h1 className="text-4xl text-orange-500 font-bold mt-4">ABOUT JS</h1>
        </div>
      </div>

      <div>
        <AboutCompo />
      </div>

      <div>
        {/* Happy client section */}
        <Countup />
      </div>

      <div className="container mx-auto p-6 mb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 ">
          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 rounded-2xl shadow-lg w-full lg:w-1/2 hover:scale-105 transition-all duration-300">
            <img
              src="/assets/gallery/38.jpeg"
              alt="Our Mission"
              className="w-64 h-64 object-cover rounded-full mb-4 lg:mb-0 lg:mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold text-orange-500">Our Mission</h2>
              <p className="text-gray-600 font-bold mt-2">
                Our mission is to bring exquisite Mehendi artistry to life,
                combining tradition and creativity to craft stunning designs for
                every occasion.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 rounded-2xl shadow-lg w-full lg:w-1/2 hover:scale-105 transition-all duration-300 ">
            <img
              src="/assets/gallery/35.jpeg"
              alt="Our Vision"
              className="w-64 h-64 object-cover rounded-full mb-4 lg:mb-0 lg:mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold text-orange-500">Our Vision</h2>
              <p className="text-gray-600 font-bold mt-2">
                Our vision is to be the most sought-after Mehendi artist, known
                for our intricate designs, exceptional quality, and
                unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
