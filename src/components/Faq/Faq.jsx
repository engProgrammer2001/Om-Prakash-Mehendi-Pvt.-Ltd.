import React, { useState } from "react";
import faqData from "../../data/FaqData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full mx-auto p-4 py-8 my-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('/assets/gallery/17.jpeg')",
          backgroundColor: "#27214e",
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-3xl text-orange-500 font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#27214e] text-orange-500 rounded-lg shadow-md"
            >
              <div
                className="p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                  openIndex === index ? "max-h-96" : ""
                }`}
              >
                {openIndex === index && (
                  <div className="p-4 border-t border-gray-700 text-orange-500">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
