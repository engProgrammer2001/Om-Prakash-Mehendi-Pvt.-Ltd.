import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { FaRegStar, FaStar } from "react-icons/fa";
import TestimonialsData from "../../data/TestimonialData";

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return <div className="flex justify-center space-x-1 mb-2">{stars}</div>;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-5">
      <h2 className="text-4xl text-orange-500 font-bold text-center mb-8">
        Testimonials
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={30}
        slidesPerView={1}
      >
        {TestimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-200 text-slate-900 p-12 rounded-lg shadow-md text-center px-16">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <p className="text-lg italic mb-4">"{testimonial.message}"</p>
              <h4 className="text-sm font-semibold">- {testimonial.name}</h4>
              <p className="text-xs mt-2 italic">{testimonial.service}</p>
              {renderStars(testimonial.rating)}
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev bg-orange-500 text-white rounded-full p-6"></div>
        <div className="swiper-button-next bg-orange-500 text-white rounded-full p-6"></div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
