import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import axios from "axios";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "86d67585-4e7c-4efc-9823-8511ca502c69",
        name: formData.name,
        email: formData.email,
        date: formData.date,
        number: formData.number,
        message: formData.message,
      });
      if (response.data.success) {
        setSuccessMessage("Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          date: "",
          number: "",
          message: "",
        });
      } else {
        setErrorMessage("There was an error sending your message.");
      }
    } catch (error) {
      setErrorMessage("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-72 lg:h-[70vh]">
        <img
          src="/assets/feet/contact.jpg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex justify-center items-center space-x-4 text-sm font-bold">
            <Link to="/" className="text-orange-500 hover:text-gray-100">
              Home
            </Link>
            <span className="text-orange-500">/</span>
            <Link to="/contact" className="text-orange-500 hover:text-gray-100">
              Contact Us
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-orange-500">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center my-12 p-2">
        <div className="w-full max-w-6xl mx-auto  md:p-4 flex flex-wrap bg-orange-300 rounded-lg shadow-lg">
          {/* Left part for the contact form */}
          <div className="w-full md:w-1/2 p-4 ">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-700 font-bold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-slate-900 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-slate-900 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm text-gray-700 font-bold"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full text-slate-900 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm text-gray-700 font-bold"
                >
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full text-slate-900 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-700 font-bold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full text-slate-900 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#27214e] text-white py-2 px-4 rounded-md hover:bg-[#27214e] transition"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
            {successMessage && (
              <div className="bg-green-500 mt-4 text-white py-2 px-4 rounded">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-500 mt-4 text-white py-2 px-4 rounded">
                {errorMessage}
              </div>
            )}
          </div>

          {/* Right part for the contact info */}
          <div className="w-full md:w-1/2 p-4 bg-blue-50 rounded-lg py-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-500">
              Contact Info
            </h2>
            <ul className="space-y-5 text-gray-700">
              <li>
                <strong>Address:</strong> Near Prem Chineej fast Food, C-4 E,
                Market, Janakpuri Pincode 110058
              </li>
              <li>
                <strong>Phone:</strong> +91 8918234042
              </li>
              <li>
                <strong>Whatsapp:</strong> +91 9718651235
              </li>
              <li>
                <strong>Email:</strong> info@omprakashbridalmehandi.com
              </li>
              <li>
                <strong>Email For Booking:</strong> omprakashmehandiart@gmail.com
              </li>
              <li>
                <strong>Working Hours:</strong> 9:00 AM - 6:00 PM
              </li>
              <li>
                <strong>Working Days:</strong> Monday - Sunday
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-orange-500">
                Follow Us
              </h3>
              <div className="flex space-x-4 mt-2">
                <Link
                  to="#"
                  className="bg-gray-200 p-2 rounded-full text-red-500 hover:text-red-600 transition text-2xl"
                  aria-label="Instagram"
                >
                  <FaSquareInstagram />
                </Link>
                <Link
                  to="#"
                  className="bg-gray-200 p-2 rounded-full text-blue-600 hover:text-blue-700 transition text-2xl"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="#"
                  className="bg-gray-200 p-2 rounded-full text-blue-400 hover:text-blue-500 transition text-2xl"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="#"
                  className="bg-gray-200 p-2 rounded-full text-red-600 hover:text-red-700 transition text-2xl"
                  aria-label="YouTube"
                >
                  <IoLogoYoutube />
                </Link>
                <Link
                  to="#"
                  className="bg-gray-200 p-2 rounded-full text-blue-600 hover:text-blue-700 transition text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div>
        <h1 className="text-3xl text-orange-500 lg:text-4xl font-bold text-center my-12">
          Our Location
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.07972890508!2d77.0891825!3d28.617164699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04b18bffffff%3A0x3c2a38efd6e6e8ce!2sOmprakash%20bridal%20mehandi!5e1!3m2!1sen!2sin!4v1738149271418!5m2!1sen!2sin"
          title="Location map"
          width="100%"
          height="500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
