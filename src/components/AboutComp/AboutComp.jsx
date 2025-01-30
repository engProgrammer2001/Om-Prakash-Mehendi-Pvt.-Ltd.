import React from "react";
import { GoTriangleRight } from "react-icons/go";

const AboutCompo = () => {
  return (
    <>
      <div className="flex items-center justify-center h-24">
        <h2 className=" text-orange-500 text-4xl font-bold">About</h2>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row w-full">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl text-orange-500 font-bold mb-4">
            Om Prakash Bridal Mehendi
          </h2>
          <p className="text-lg">
            Om Prakash Mehandi Artist is renowned for creating breathtaking and
            intricate mehndi designs that bring grace and sophistication to
            every celebration. Our designs beautifully combine traditional
            artistry with contemporary styles, ensuring every creation tells a
            meaningful story. From exquisite bridal mehndi that enhances your
            special day to stunning designs for festivals and events, our team
            works with utmost precision and care to create designs that are both
            timeless and extraordinary.
          </p>
          <p className="text-lg mt-4">
            At Om Prakash Mehandi Artist, our passion lies in delivering an
            unforgettable experience. With decades of expertise, we bring
            innovation, dedication, and artistry to each design, ensuring that
            every mehndi moment is truly magical. Whether it’s a wedding, karva
            chauth, party, or any festive occasion, we promise to create designs
            that captivate hearts and leave a lasting impact. Trust us to make
            your mehndi journey a memorable masterpiece filled with beauty and
            joy.
          </p>
          <div className="grid text-color font-bold grid-rows-2 gap-4 py-6">
            {/* First row */}
            <ul className="flex justify-between items-center">
              <li className="flex items-center space-x-2">
                <GoTriangleRight />
                <span>100% Color Guarantee</span>
              </li>
              <li className="flex items-center space-x-2">
                <GoTriangleRight />
                <span>100% Color Guarantee</span>
              </li>
            </ul>
            {/* Second row */}
            <ul className="flex justify-between items-center">
              <li className="flex items-center space-x-2">
                <GoTriangleRight />
                <span>100% Satisfaction</span>
              </li>
              <li className="flex items-center space-x-2">
                <GoTriangleRight />
                <span>100% Satisfaction</span>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="/about"
              className="block w-full mt-4 px-4 py-2 main-btn font-bold rounded hover:bg-[#fa5d2d] text-center"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/assets/About/about1.jpg"
            alt="Om Prakash Mehandi Art"
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AboutCompo;
