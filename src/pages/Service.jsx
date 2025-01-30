import { Link, useNavigate } from "react-router-dom";
import services from "../data/ServiceData";

const Service = () => {
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/service-details/${id}`);
  };
  return (
    <>
      {" "}
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-72 lg:h-[70vh]">
        <img
          src="/assets/feet/service.jpg"
          alt="ourproject background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 p-8 flex flex-col items-center">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </nav>
          <h1 className="text-4xl text-orange-500 font-bold mt-4">ABOUT JS</h1>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-orange-500 text-3xl lg:text-4xl font-bold text-center my-12">
          Our Mehendi Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full h-full border-2 bg-[#27214e] border-orange-500 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl text-[#fa5d2d] font-semibold mb-2">
                {service.name}
              </h2>
              <p className="text-orange-500 mb-4">{service.shortDescription}</p>
              <button
                onClick={() => handleViewMore(service.id)}
                className="w-full main-btn font-bold text-slate-900 px-4 py-2 rounded hover:bg-[#fa5d2d] transition"
              >
                View More
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Service;
