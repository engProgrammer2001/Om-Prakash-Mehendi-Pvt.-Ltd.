import React from "react";
import Hero from "../components/Hero/Hero";
import AboutCompo from "../components/AboutComp/AboutComp";
import ServiceCompo from "../components/ServicesComp/ServicesComp";
import GalleryCompo from "../components/GalleryCompo/GalleryCompo";
import Gallery from "./Gallery";
import Faq from "../components/Faq/Faq";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <AboutCompo />
      </div>
      <div>
        <ServiceCompo />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <GalleryCompo />
      </div>
    </>
  );
};

export default Home;
