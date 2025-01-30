import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Refer from "../pages/refer";
import PayNow from "../pages/PayNow";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/pay-now" element={<PayNow />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
