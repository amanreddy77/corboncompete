import React from "react";
import boost from "../images/boost.png";
import microsoft from "../images/microsoft.png";
import manufact from "../images/manufact.png";
import Dpiit from "../images/Dpiit.png";

const GloballyRecognized = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-gray-100 min-h-screen font-sans px-6 py-10">
      <div className="text-center mb-20">
        <h2 className="text-2xl font-bold">Globally recognised</h2>
        <div className="flex justify-evenly items-center mt-6 gap-4 flex-wrap">
          <img src={boost} alt="BoostUp" className="h-16 object-contain" />
          <img
            src={microsoft}
            alt="Microsoft for Startups"
            className="h-16 object-contain"
          />
          <img
            src={manufact}
            alt="EIT Manufacturing"
            className="h-16 object-contain"
          />
          <img src={Dpiit} alt="DPIIT" className="h-16 object-contain" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
    
        <div className="relative flex flex-col items-start w-full lg:w-auto">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-9 w-1 bg-gray-300"></div>

          <div className="flex items-center mb-8 relative">
            <div className="bg-teal-400 text-white h-10 w-10 flex items-center justify-center rounded-full font-bold">
              01
            </div>
            <div className="ml-4 font-medium text-teal-400">Analyze</div>
          </div>

          <div className="flex items-center mb-8 relative">
            <div className="bg-gray-300 text-white h-10 w-10 flex items-center justify-center rounded-full font-bold">
              02
            </div>
            <div className="ml-4 font-medium text-gray-500">Advise</div>
          </div>

          <div className="flex items-center relative">
            <div className="bg-gray-300 text-white h-10 w-10 flex items-center justify-center rounded-full font-bold">
              03
            </div>
            <div className="ml-4 font-medium text-gray-500">Adapt</div>
          </div>
        </div>

        {/* Description Card */}
        <div className="ml-0 lg:ml-10 bg-gradient-to-r from-red-50 to-blue-100 rounded-xl shadow-lg p-6 lg:p-20 max-w-full lg:max-w-2xl">
          <h3 className="text-xl font-semibold mb-4 text-center lg:text-left">
            Analyze
          </h3>
          <p className="text-sm text-gray-600 uppercase mb-4 text-center lg:text-left">
            ANALYZE, ACT, ACHIEVE: BRIDGING SUSTAINABILITY GAPS
          </p>
          <p className="text-gray-700 leading-relaxed text-center lg:text-left">
            Analyze your carbon emissions, across all operations, identifying
            key emission sources, and providing actionable insights for
            effective carbon reduction. With real-time data and continuous
            monitoring, you can track progress and make informed decisions.
            Partner with us to drive sustainability and achieve your carbon
            reduction goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GloballyRecognized;
