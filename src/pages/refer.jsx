import React, { useState } from "react";
import services from "../data/ServiceData";

const Refer = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    date: "",
    location: "",
    friendName: "",
    friendLastName: "",
    friendLocation: "",
    friendNumber: "",
    friendEmail: "",
    serviceTitle: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://api.web3forms.com/submit";

    const payload = {
      access_key: "",
      ...formData,
    };

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          name: "",
          number: "",
          email: "",
          date: "",
          location: "",
          friendName: "",
          friendLastName: "",
          friendLocation: "",
          friendNumber: "",
          friendEmail: "",
          serviceTitle: "",
        });
      } else {
        alert("Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-orange-500 h-72 lg:h-[70vh]">
        <img
          src="/assets/feet/refer.jpg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <a href="/" className="text-gray-300 hover:text-orange-500">
              Home
            </a>
            <span className="text-gray-300 hover:text-orange-500">/</span>
            <a href="/refer" className="text-gray-300 hover:text-orange-500">
              Refer
            </a>
          </nav>
          <h1 className="text-4xl font-bold mt-4">Refer To Friends</h1>
        </div>
      </div>
      <div className="min-h-screen flex mt-4 items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 rounded-lg shadow-md">
          <div
            className="relative w-full text-white font-bold p-6 rounded-lg shadow-md bg-cover bg-center"
            style={{
              backgroundImage: `url('/assets/baby-shower/ArabianDesignMehandiDetails.jpeg')`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

            {/* Content */}
            <div className="relative">
              <h1 className="text-3xl text-orange-500 font-bold text-center mb-6">
                ✨ Refer Your Friends to Om Prakash Mehndi Artist! ✨
              </h1>
              <p className="text-lg mb-4">
                Share the beauty of Mehndi with your friends! 💖 If you love our
                designs, let your friends and family know about Om Prakash
                Mehndi Artist. Whether it’s for a wedding, festival, or special
                occasion, we promise to add a touch of elegance and tradition to
                their celebrations. 🌿 Spread the word & let’s celebrate art
                together! 🌿 Thank you for your support! 💕
              </p>
              <h2 className="text-2xl text-orange-500 font-semibold mb-4">
                Why Refer Your Friends?
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Exclusive Discounts:</strong> Earn discounts on your
                  next mehndi service when your friends book with us.
                </li>
                <li>
                  <strong>Complimentary Add-ons:</strong> Get free add-on
                  designs or upgrades for every successful referral.
                </li>
                <li>
                  <strong>Celebrate Together:</strong> Introduce your loved ones
                  to the magic of Om Prakash Mehandi Artist and make every occasion
                  unforgettable.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold mt-6 text-orange-500 mb-4">
                How It Works
              </h2>
              <ol className="list-decimal ml-6 space-y-2">
                <li>Share your referral code or link with friends.</li>
                <li>
                  Your friend books our mehndi services and enjoys a
                  personalized experience.
                </li>
                <li>
                  Once their booking is complete, you unlock your rewards!
                </li>
              </ol>
              <p className="text-lg mt-6">
                Spread the beauty and elegance of mehndi while enjoying
                exclusive benefits. Start referring your friends today and let
                Om Prakash Mehandi Artist make every event even more special for you
                and your loved ones!
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Form */}
              <div>
                <h1 className="text-3xl text-orange-500 font-bold text-center mb-6">
                  Fill below form to refer your friends
                </h1>
                {message && (
                  <div className="bg-green-500 text-orange-500 p-4 rounded-lg mb-4">
                    {message}
                  </div>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="lg:flex lg:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Your Number
                      </label>
                      <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        placeholder="Enter your number"
                        className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="lg:flex lg:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        placeholder="Enter the date"
                        className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-500">
                      Your Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="Enter your location"
                      className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                    />
                  </div>
                  <div className="lg:flex lg:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Friend's Name
                      </label>
                      <input
                        type="text"
                        name="friendName"
                        value={formData.friendName}
                        onChange={handleChange}
                        required
                        placeholder="Enter friend's name"
                        className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter friend's last name"
                        className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                      />
                    </div>
                  </div>
                  <div className="lg:flex lg:space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Friend's Location
                      </label>
                      <input
                        type="text"
                        name="friendLocation"
                        value={formData.friendLocation}
                        onChange={handleChange}
                        required
                        placeholder="Enter friend's location"
                        className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-orange-500">
                        Friend's Number
                      </label>
                      <input
                        type="tel"
                        name="friendNumber"
                        value={formData.friendNumber}
                        onChange={handleChange}
                        required
                        placeholder="Enter friend's number"
                        className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-500">
                      Friend's Email
                    </label>
                    <input
                      type="email"
                      name="friendEmail"
                      value={formData.friendEmail}
                      onChange={handleChange}
                      required
                      placeholder="Enter friend's email"
                      className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-500">
                      Select Service Title
                    </label>
                    <select
                      name="serviceTitle"
                      value={formData.serviceTitle}
                      onChange={handleChange}
                      required
                      placeholder="Select a service"
                      className="input-field border border-orange-500 p-2 rounded-md text-[#27214e] outline-none w-full"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-orange-500 p-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Submit Booking
                  </button>
                </form>
              </div>

              {/* Right Side - Images */}
              <div className="hidden lg:flex flex-col space-y-4">
                <img
                  src="/assets/baby-shower/ArabianDesignMehandiDetails.jpeg"
                  alt="Form Visual 1"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/assets/baby-shower/baby-shower2.jpg"
                  alt="Form Visual 2"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refer;
