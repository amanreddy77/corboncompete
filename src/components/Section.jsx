import React from "react";
import section0 from "../images/section0.svg";
import city from "../images/city.svg";
import group from "../images/group.png";
import trees from "../images/trees.png";
import scrolle from "../images/scroll.svg";

const FeaturesSection = () => {
  return (
    <div className="bg-gradient-to-l from-white to-yellow-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Section 1 */}
      <div className="relative flex flex-col lg:flex-row items-center gap-8 mb-16">
        <div className="lg:w-3/4 bg-zinc-100 shadow-lg rounded-lg h-auto p-6 border border-gray-900 relative z-10 lg:pr-12 lg:pl-12 lg:-mr-8">
          <h2 className="text-teal-500 text-xl sm:text-2xl font-bold mb-4">
            CarbonGPT
          </h2>
          <p className="text-gray-700 leading-relaxed text-left text-sm sm:text-base">
            Our proprietary small language model that is domain Driven AI for
            the sectors and industries Carbon Compete focuses on. This allows
            companies to leverage from domain-specific carbon, product life
            cycle, supply chain, and sustainability data and drive their
            sustainability-focused decision-making faster and with better
            accuracy by leveraging the inherent AI and relevancy of the data.
          </p>
        </div>
        <div className="lg:w-1/2 relative z-20 transform scale-100 lg:scale-110 lg:translate-x-10">
          <img
            src={section0}
            alt="CarbonGPT Interface"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>


      <div className="relative flex flex-col lg:flex-row-reverse items-center gap-8 bg-[#F5F5F5] rounded-2xl p-6 lg:p-8">
        <div className="lg:w-1/2 bg-[#F5F5F5] rounded-lg relative z-10 lg:pl-12">
          <span className="inline-block bg-gray-900 text-fuchsia-200 text-xs font-semibold px-2 py-1 mb-4">
            ENTERPRISE
          </span>
          <h2 className="text-teal-500 text-xl sm:text-2xl font-bold mb-4">
            Financed Emissions
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Financed emissions refer to the indirect greenhouse gas (GHG)
            emissions linked to financing activities. Tracking financed
            emissions helps financial institutions comprehend and address their
            environmental impact by accounting for not only their direct
            operations but also the emissions stemming from their investments
            and lending practices.
          </p>
        </div>
        <div className="lg:w-1/2 relative z-20">
          <img
            src={city}
            alt="CarbonGPT Interface"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>


      <div className="w-full mt-16">
        <img src={group} alt="Blue Box" className="w-full object-cover" />
      </div>

      {/* Section 4 */}
      <div className="relative flex flex-col lg:flex-row-reverse items-center gap-8 mt-16">
        <div className="lg:w-1/2 bg-[#F5F5F5] rounded-lg p-6 lg:pl-12 h-auto relative z-10">
          <span className="inline-block bg-gray-900 text-fuchsia-200 text-xs font-semibold px-2 py-1 mb-4">
            ENTERPRISE
          </span>
          <h2 className="text-black text-xl sm:text-2xl font-bold mb-4">
            Assurance-grade GHG emissions reporting for every major climate
            disclosure regulation.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="block">Regulatory Reporting</span>
            <span className="block mt-4">Investor Reporting</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:gap-8 lg:w-1/2">
          <div className="w-full max-w-sm lg:max-w-md">
            <img
              src={trees}
              alt="CarbonGPT Interface"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full max-w-sm lg:max-w-md">
            <img
              src={scrolle}
              alt="CarbonGPT Interface"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
