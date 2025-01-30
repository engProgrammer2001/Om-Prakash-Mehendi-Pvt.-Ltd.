import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  { src: "/assets/slider/slider4.jpg", text: "✨ Welcome to Om Prakash Mehndi Artist ✨" },
  { src: "/assets/slider/slider3.jpg", text: "Om Prakash Mehendi Artist - Luxury Heavy Bridal Design" },
  { src: "/assets/slider/slider5.jpg", text: "Om Prakash Mehendi Artist - Foot Mehendi Design" },
  { src: "/assets/slider/slider5.jpg", text: "Om Prakash Mehendi Artist - Good Looking Design" },
  { src: "/assets/slider/slider6.jpg", text: "Om Prakash Mehendi Artist - Dulha Dulhan Mehendi" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] lg:h-screen overflow-hidden">
      <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {/* Image with opacity */}
            <img
              src={image.src}
              alt={image.text}
              className="w-full h-full object-cover "
            />
            {/* Overlay for custom color */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-[#27214e] opacity-60"></div> */}
            {/* Text */}
            <div className="w-full absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white font-bold z-10 text-center">
              <h1 className="text-2xl lg:text-4xl md:text-4xl sm:text-2xl">{image.text}</h1>
              <p className="text-2xl mt-4">Book Your Mehendi Design Now</p>
              <div className="flex items-center justify-center mt-8">
                <button className="p-4 px-6 text-lg bg-orange-500 hover:bg-orange-600 rounded-md">
                  <Link to="/book-today">Book Today</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl md:text-5xl bg-black bg-opacity-50 rounded-full p-6 hover:bg-opacity-80 z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl md:text-5xl bg-black bg-opacity-50 rounded-full p-6 hover:bg-opacity-80 z-20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
