import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookToday from "../BookToday/BookToday";
import services from "../../data/ServiceData";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = services.find((item) => item.id === parseInt(id));
    if (!selectedService) {
      navigate("/");
    } else {
      setService(selectedService);
    }
  }, [id, navigate]);

  if (!service) return <p>Loading...</p>;

  return (
    <>
      <div className="relative bg-zinc-800 text-white h-80 lg:h-[80vh]">
        <img
          src="/assets/banner/banner3.jpeg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6 p-3">
        {/* Left Section: Service Details */}
        <div className="md:col-span-5 col-span-1 border border-orange-500 rounded-lg p-2 shadow-lg">
          <h1 className="text-3xl text-orange-500 font-bold text-center mb-8">
            {service.name} Details
          </h1>
          <div>
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover rounded-md mb-6"
            />
            <h2 className="text-2xl text-orange-500 font-semibold mb-4">
              {service.name}
            </h2>
            <p className="text-[#27214e] font-bold mb-4">
              {service.shortDescription}
            </p>
            <p className="text-[#27214e] font-bold mb-4">
              {service.description}
            </p>
            <img
              src={service.image1}
              alt={service.name}
              className="w-full h-full object-cover rounded-md mb-6"
            />
            <p className="text-[#27214e] font-bold mb-4">
              {service.description2}
            </p>
            <h3 className="text-xl text-orange-500 font-semibold mb-2">
              Benefits:
            </h3>
            <ul className="list-disc list-inside text-[#27214e] font-bold">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="mb-2">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Section: Service Titles */}
        <div className="md:col-span-2 col-span-1 border rounded-lg p-4 shadow-lg border-orange-500">
          <h3 className="text-xl mb-4 text-orange-500 font-bold">
            Our Services
          </h3>
          <ul className="list-none text-[#27214e] font-bold">
            {services.map((item) => (
              <li
                key={item.id}
                className={`mb-4 py-4 px-2 rounded-lg border-2 cursor-pointer transition duration-200 hover:bg-orange-500 ${
                  item.id === service.id
                    ? "bg-orange-500 text-[#27214e] border-gray-400"
                    : "border-[#27214e]"
                }`}
                onClick={() => navigate(`/service-details/${item.id}`)} // Use navigate for navigation
              >
                {item.name}
              </li>
            ))}
          </ul>
          <BookToday />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
