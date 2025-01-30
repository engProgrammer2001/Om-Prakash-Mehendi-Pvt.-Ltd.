import React, { useState } from "react";
import services from "../../data/ServiceData";

const BookToday = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    date: "",
    location: "",
    serviceTitle: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Service Booking Submitted Successfully!");
        setErrorMessage(""); // Clear error message
        // Reset form data
        setFormData({
          name: "",
          number: "",
          email: "",
          date: "",
          location: "",
          serviceTitle: "",
          message: "",
        });
      } else {
        setErrorMessage("Failed to submit. Please try again.");
        setSuccessMessage(""); // Clear success message
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage(""); // Clear success message
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-6">
      <div className="w-full bg-[#27214e] p-4 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-orange-500 mb-6 underline">
          Book Service
        </h2>
        {/* Success and Error messages */}
        {successMessage && (
          <div className="bg-green-500 text-white font-bold p-3 mb-4 text-center rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <p className="text-red-600 text-center mb-4">{errorMessage}</p>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-orange-500"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-1 text-black block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-orange-500"
              >
                Your Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                required
                className="mt-1 text-black block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-orange-500"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 text-black block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-orange-500"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-1 text-black block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-orange-500"
              >
                Your Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 text-black block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="serviceTitle"
                className="block text-sm font-medium text-orange-500"
              >
                Select Service Title
              </label>
              <select
                id="serviceTitle"
                name="serviceTitle"
                value={formData.serviceTitle}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-orange-500"
            >
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter any additional information"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 text-black block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-bold p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookToday;
