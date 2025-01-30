import { Link, useNavigate } from "react-router-dom";
import services from "../../data/ServiceData";

const ServiceCompo = () => {
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    navigate(`/service-details/${id}`);
  };
  return (
    <div className="p-6">
      <h1 className="text-orange-500 text-3xl lg:text-4xl font-bold text-center my-2">
        Our Mehendi Services
      </h1>
      <p className="text-slate-900 text-lg text-center my-4 font-bold lg:px-40 p-2 ">
        At Om Prakash Mehndi Artist, we offer exquisite Mehndi designs tailored
        for every occasion. From intricate bridal patterns to elegant festival
        designs, our skilled artistry blends tradition with creativity. Using
        high-quality, natural Mehndi, we ensure rich color and long-lasting
        beauty. Whether it’s a wedding, engagement, baby shower, or any
        celebration, our designs add grace and charm to your special moments.
        <br /> ✨ Book your appointment today and adorn your hands with timeless
        elegance! ✨
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 6).map((service) => (
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
      <div>
        <button className="w-full my-4 main-btn font-bold text-slate-900 px-4 py-2 rounded hover:bg-[#fa5d2d] transition">
          <Link to="/service">View all Service</Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCompo;
