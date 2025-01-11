import React from "react";
import health from "../images/health.svg";
import stocks from "../images/stocks.svg";
import shopkeeper from "../images/shopkeeper.svg";
import individual from "../images/individual.svg";
import home from "../images/home.svg";
import blues from "../images/blues.svg";

const Features = () => {
  const features = [
    {
      title: "Carbon Score",
      description:
        "With our unique approach to carbon accounting, we will enable the ecosystem to deliver their product’s real environmental footprint with our Carbon Score.",
      icon: health,
    },
    {
      title: "Carbon Canvas",
      description:
        "Trace your product's emissions across its supply chain and optimise your product environmental footprint.",
      icon: stocks,
    },
    {
      title: "Carbon Confidence Score",
      description:
        "Show your commitment to data integrity, transparency and veracity and build trust with your customer base.",
      icon: shopkeeper,
    },
    {
      title: "Carbon Navigator",
      description:
        "AI automated framework for data extraction, any source at any time. Handling a wide swath of data formats, whether it is coming from an ERP, CSV, Document or Image.",
      icon: individual,
    },
    {
      title: "Carbon Advice",
      description:
        "A proprietary recommendation engine to propose solutions to reduce your emissions and reach your sustainability targets.",
      icon: home,
    },
    {
      title: "CarbonGPT",
      description:
        "AI model to analyse value chain by identifying carbon hotspots and advice by generating decarbonization roadmaps.",
      icon: blues,
    },
  ];

  return (
    <div className="bg-[url('/Users/amanreddyp/carboncompete/frontend/src/images/backgroud.png')] bg-cover bg-center text-white py-16 px-8">
      <h2 className="text-left text-3xl font-bold mb-12 text-teal-400">
        Our Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-700 flex flex-col items-center text-center"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-16 mb-4"
            />

            <h3 className="text-xl font-semibold mb-4 text-white">
              {feature.title}
            </h3>

            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
