import React from "react";
import { Link } from "react-router-dom";

const PayNow = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-72 lg:h-[70vh]">
        <img
          src="/assets/slider/slider4.jpg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/pay-now" className="text-gray-300 hover:text-white">
              Pay Now
            </Link>
          </nav>
          <h1 className="text-3xl font-bold mt-4">Make Payment with Us</h1>
        </div>
      </div>
      {/* Payment Section */}
      <div className="flex flex-col lg:flex-row lg:gap-4 p-4">
        {/* Left Section - Payment Scanner */}
        <div className="lg:w-1/2 bg-gray-200 p-6 rounded-lg w-full flex justify-center items-center">
          <img
            src="/assets/refer/scanner.jpeg"
            alt="Payment Scanner"
            className="w-full max-w-md border border-gray-300 rounded-lg shadow-lg"
          />
        </div>
        {/* Right Section - Bank Details */}
        <div className="lg:w-1/2 bg-gray-200 text-yellow-500 p-6 rounded-lg w-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Bank Details</h2>
          <ul className="space-y-2 text-lg">
            <li>
              <span className="font-semibold">Bank Name:</span> SBI Bank
            </li>
            <li>
              <span className="font-semibold">Account Number:</span> 1234567890
            </li>
            <li>
              <span className="font-semibold">Account Holder Name:</span> John
              Doe
            </li>
            <li>
              <span className="font-semibold">IFSC Code:</span> ABCD0123456
            </li>
            <li>
              <span className="font-semibold">Branch:</span> Main Street, City
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default PayNow;
