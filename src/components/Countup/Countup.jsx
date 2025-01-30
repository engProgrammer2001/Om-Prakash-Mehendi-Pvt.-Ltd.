// components/Countup.js
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Import icons from react-icons
import { PiUsersFourFill } from "react-icons/pi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io5";
import CountUp from "react-countup";

// Countup Component
const Countup = () => {
  // Define icon mapping
  const icons = {
    "Our Happy Clients": (
      <PiUsersFourFill className="text-7xl text-orange-500" />
    ),
    Branches: <FaProjectDiagram className="text-7xl text-orange-500" />,
    Experience: <MdLocationCity className="text-7xl text-orange-500" />,
    "Total Staff": <IoPeopleCircleSharp className="text-7xl text-orange-500" />,
  };

  return (
    <div className="bg-gradient-to-tr from-[#27214e] to-blue-100 p-8 my-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <CountUpCard
          icon={icons["Our Happy Clients"]}
          end={988}
          label="Our Happy Clients"
        />
        <CountUpCard icon={icons["Branches"]} end={3} label="Branches" />
        <CountUpCard icon={icons["Experience"]} end={9} label="Experience" />
        <CountUpCard icon={icons["Total Staff"]} end={11} label="Total Staff" />
      </div>
    </div>
  );
};

// CountUpCard Component
const CountUpCard = ({ icon, end, label, suffix = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    if (inView) {
      setCountStarted(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div> {/* Render icon dynamically */}
      {countStarted && (
        <h2 className="text-5xl font-bold text-primary text-orange-500">
          <CountUp end={end} duration={2} suffix={suffix} />+
        </h2>
      )}
      <p className="text-muted-foreground text-orange-500 font-bold text-2xl mt-2">
        {label}
      </p>
    </div>
  );
};

export default Countup;
