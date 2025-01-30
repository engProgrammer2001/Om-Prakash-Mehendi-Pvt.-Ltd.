import React, { useState } from "react";
import BookToday from "../components/BookToday/BookToday";
import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    "/assets/celibraty/c1.jpeg",
    "/assets/celibraty/c2.jpeg",
    "/assets/celibraty/c3.jpeg",
    "/assets/celibraty/c4.jpeg",
    "/assets/celibraty/c5.jpeg",
    "/assets/celibraty/c6.jpeg",
    "/assets/celibraty/c7.jpeg",
    "/assets/celibraty/c8.jpeg",
    "/assets/celibraty/c9.jpeg",
    "/assets/celibraty/c10.jpeg",
    "/assets/celibraty/c11.jpeg",
    "/assets/celibraty/c12.jpeg",
    "/assets/celibraty/c13.jpeg",
    "/assets/celibraty/c14.jpeg",
    "/assets/celibraty/c15.jpeg",
    "/assets/gallery/70.jpeg",
    "/assets/gallery/71.jpeg",
    "/assets/gallery/72.jpeg",
    "/assets/gallery/73.jpeg",
    "/assets/gallery/46.jpeg",
    "/assets/gallery/45.jpeg",
    "/assets/gallery/44.jpeg",
    "/assets/gallery/43.jpeg",
    "/assets/gallery/42.jpeg",
    "/assets/gallery/41.jpeg",
    "/assets/gallery/40.jpeg",
    "/assets/gallery/39.jpeg",
    "/assets/gallery/33.jpeg",
    "/assets/gallery/32.jpeg",
    "/assets/gallery/31.jpeg",
    "/assets/gallery/30.jpeg",
    "/assets/gallery/29.jpeg",
    "/assets/gallery/28.jpeg",
    "/assets/gallery/27.jpeg",
    "/assets/gallery/26.jpeg",
    "/assets/gallery/25.jpeg",
    "/assets/gallery/24.jpeg",
    "/assets/gallery/23.jpeg",
    "/assets/gallery/22.jpeg",
    "/assets/gallery/21.jpeg",
    "/assets/gallery/20.jpeg",
    "/assets/gallery/19.jpeg",
    "/assets/gallery/18.jpeg",
    "/assets/gallery/17.jpeg",
    "/assets/gallery/16.jpeg",
    "/assets/gallery/15.jpeg",
    "/assets/gallery/o6.jpeg",
    "/assets/gallery/o5.jpeg",
    "/assets/gallery/o4.jpeg",
    "/assets/gallery/o3.jpeg",
    "/assets/gallery/o2.jpeg",
    "/assets/gallery/o1.jpeg",
    "/assets/feet/f1.jpeg",
    "/assets/feet/f2.jpeg",
    "/assets/feet/f3.jpeg",
    "/assets/feet/f4.jpeg",
    "/assets/feet/f5.jpeg",
    "/assets/feet/f6.jpeg",
    "/assets/feet/f7.jpeg",
    "/assets/feet/f8.jpeg",
    "/assets/feet/f9.jpeg",
    "/assets/feet/f10.jpeg",
    "/assets/feet/f11.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-80 lg:h-[80vh]">
        <img
          src="/assets/banner/banner2.jpeg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex justify-center items-center space-x-4 text-sm font-bold">
            <Link to="/" className="text-orange-500 hover:text-gray-100">
              Home
            </Link>
            <span className="text-orange-500">/</span>
            <Link to="/gallery" className="text-orange-500 hover:text-gray-100">
              Gallery 
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-orange-500">
            Our Gallery
          </h1>
        </div> */}
      </div>
      <div className="p-4">
        <div>
          <h2 className="text-5xl text-orange-500 font-bold text-center mb-4">
            Gallery
          </h2>
          <p className="font-semibold text-center text-2xl text-[#27214e]">
            Welcome to our gallery
          </p>
          <p className="px-4 lg:px-24 pt-4 pb-14 text-lg text-center text-[#27214e] font-bold">
            We create beautiful Mehndi designs that celebrate art, culture, and
            tradition. Our detailed patterns are made with love and care to
            bring out the beauty of this timeless art. Whether you prefer
            traditional motifs or modern styles, our designs are full of
            creativity and elegance. Every Mehndi stroke tells a story and adds
            charm to your special moments. Whether you're a bride, celebrating a
            festival, or just love Mehndi, we hope our art brings joy to your
            day. Thank you for choosing Om Prakash Mehndi Artist and supporting
            this beautiful tradition!
          </p>
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-[550px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal for Image Viewing */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
              >
                X
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-screen object-contain rounded-lg"
              />
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevImage}
                  className="text-white text-4xl hover:text-gray-400"
                >
                  &lt;
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextImage}
                  className="text-white text-4xl hover:text-gray-400"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Testimonials */}
      {/* <div>
        <Testimonials />
      </div> */}

      {/* Booking Section */}
      <div className="mb-12 px-4">
        {/* Title Section */}
        <div className="text-center py-8 flex items-center justify-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-orange-500">
            Send Booking to Mehndi Service
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap">
          {/* Left side for the image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative mb-6 lg:mb-0">
            <img
              src="/assets/gallery/34.jpeg"
              alt="Book Image"
              className="w-full h-[700px] rounded-lg"
            />
          </div>

          {/* Right side for the BookToday component */}
          <div className="w-full  lg:w-1/2 flex items-center justify-center">
            <BookToday />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
