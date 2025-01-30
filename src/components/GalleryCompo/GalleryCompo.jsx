import React, { useState } from "react";
import BookToday from "../BookToday/BookToday";
import Testimonials from "../Testimonials/Testimonials";
import { Link } from "react-router-dom";

const GalleryCompo = () => {
  const images = [
    "/assets/gallery/34.jpeg",
    "/assets/gallery/33.jpeg",
    "/assets/gallery/32.jpeg",
    "/assets/gallery/31.jpeg",
    "/assets/gallery/35.jpeg",
    "/assets/gallery/36.jpeg",
    "/assets/gallery/37.jpeg",
    "/assets/gallery/38.jpeg",
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
      <div className="p-4">
        <div>
          <h2 className="text-5xl text-orange-500 font-bold text-center">
            Gallery
          </h2>
          <p className="font-semibold text-center">Welcome to our gallery</p>
          <p className="px-4 lg:px-24 text-lg text-center text-slate-900 py-2">
            "Welcome to Om Prakash Mehendi, where every design is a celebration
            of art, culture, and tradition. Our intricate Mehendi patterns are
            crafted with passion and precision, capturing the beauty and
            elegance of this timeless art form. From traditional motifs to
            modern creations, our designs reflect creativity, skill, and
            imagination. Each stroke tells a story and adds a touch of magic to
            your special moments. Whether you're a bride-to-be, celebrating a
            festival, or simply indulging in the joy of Mehendi, we hope our
            artistry brings grace and happiness to your day. Thank you for
            choosing Om Prakash Mehendi and supporting the beauty of this
            heritage art!"
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
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        <div>
          <button className="w-full my-4 main-btn font-bold text-slate-900 px-4 py-2 rounded hover:bg-[#fa5d2d] transition">
            <Link to={"/gallery"}>View More</Link>
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <Testimonials />
      </div>
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
          <div className="w-full p-4 lg:w-1/2 flex items-center justify-center relative mb-6 lg:mb-0">
            <img
              src="/assets/home/omPrakash.jpg"
              alt="Book Image"
              className="w-full h-full rounded-lg"
            />
          </div>

          {/* Right side for the BookToday component */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <BookToday />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCompo;
