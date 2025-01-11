import React from "react";
import building from "../images/Building.svg";
import objects from "../images/Objects.svg";
import plants from "../images/plants.svg";
import map from "../images/map.svg";
import book from "../images/book.svg";
import climate from "../images/climate.svg";
import orange from "../images/orange.svg";
import blocks from "../images/blocks.svg";
import turnon from "../images/turnon.svg";

const MissionSection = () => {
  return (
    <div className="bg-gradient-to-l from-white to-blue-100 py-16 px-6 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-teal-50 shadow-lg rounded-lg p-6 lg:p-8 border border-teal-500">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 lg:mb-12">
              Our <span className="text-teal-500">Mission</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              CarbonCompete has developed an innovative software platform,
              Carbon Intel, to propose an integrated solution for ecosystem
              players. Our solution tackles current supply chain sustainability
              challenges by allowing ecosystem players to...
            </p>
            <img
              src={building}
              alt="Mission Illustration"
              className="w-full h-48 object-contain mt-4"
            />
          </div>


          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-yellow-50 shadow-lg rounded-lg p-6 text-center">
              <img
                src={objects}
                alt="Industry Challenge"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Industry Challenge
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 shadow-lg rounded-lg p-6 text-center">
              <img
                src={plants}
                alt="Greenwashing"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Greenwashing
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-green-50 shadow-lg rounded-lg p-6 text-center">
              <img
                src={map}
                alt="Lack of Scope 3 Accounting"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Lack of Scope 3 Accounting
              </h3>
            </div>

            {/* Card 4 */}
            <div className="bg-blue-50 shadow-lg rounded-lg p-6 text-center">
              <img
                src={book}
                alt="Lack of Automation"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Lack of Automation
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-16 px-6 mt-16">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-teal-500 text-start mb-8 lg:mb-12">
            Contribution to the United Nation Goals on Sustainable Development
          </h3>

 
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-green-50 shadow-lg rounded-lg p-6 border border-gray-200">
              <h4 className="text-base sm:text-lg font-semibold text-green-800 mb-4">
                Building resilient infrastructure and promoting sustainable
                industrialization
              </h4>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <p className="text-gray-700 text-sm sm:text-base flex-1">
                  The plan involves developing innovative tools to regulate
                  industries and promote sustainability through informed use.
                </p>
                <img
                  src={climate}
                  alt="Icon"
                  className="w-16 sm:w-24 h-16 sm:h-24 object-contain"
                />
              </div>
              <a href="#" className="text-teal-500 font-medium mt-4 block">
                Read more...
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h4 className="text-base sm:text-lg font-semibold text-yellow-800 mb-4">
                Establish sustainable consumption and production patterns
              </h4>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <p className="text-gray-700 text-sm sm:text-base flex-1">
                  How to achieve sustainable management and rational use of
                  natural resources? How can we reduce food losses?
                </p>
                <img
                  src={orange}
                  alt="Icon"
                  className="w-16 sm:w-24 h-16 sm:h-24 object-contain"
                />
              </div>
              <a href="#" className="text-teal-500 font-medium mt-4 block">
                Read more...
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-yellow-50 shadow-lg rounded-lg p-6 border border-gray-200">
              <h4 className="text-base sm:text-lg font-semibold text-orange-800 mb-4">
                Guarantee access to reliable, sustainable and modern energy
                services
              </h4>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <p className="text-gray-700 text-sm sm:text-base flex-1">
                  Improving the energy efficiency of industrial tools through
                  reliable consumption data.
                </p>
                <img
                  src={blocks}
                  alt="Icon"
                  className="w-16 sm:w-24 h-16 sm:h-24 object-contain"
                />
              </div>
              <a href="#" className="text-teal-500 font-medium mt-4 block">
                Read more...
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-yellow-50 shadow-lg rounded-lg p-6 border border-gray-200">
              <h4 className="text-base sm:text-lg font-semibold text-orange-800 mb-4">
                Guarantee access to reliable, sustainable and modern energy
                services
              </h4>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <p className="text-gray-700 text-sm sm:text-base flex-1">
                  Improving the energy efficiency of industrial tools through
                  reliable consumption data.
                </p>
                <img
                  src={turnon}
                  alt="Icon"
                  className="w-16 sm:w-24 h-16 sm:h-24 object-contain"
                />
              </div>
              <a href="#" className="text-teal-500 font-medium mt-4 block">
                Read more...
              </a>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="bg-white mt-16 p-8 rounded-lg shadow-lg text-center">
            <h4 className="text-xl sm:text-2xl font-bold text-teal-500 mb-4">
              Subscribe To Our Blog
            </h4>
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              Join our subscribers list to get the latest news and updates.
            </p>
            <div className="flex flex-col justify-center items-center  sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md p-3 border border-gray-300 w-full sm:max-w-xs"
              />
              <button className="bg-teal-500 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
