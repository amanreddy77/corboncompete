import React, { useState } from "react";
import image from "../images/stats1.png";
import logo from "../images/logo.svg";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#FFFDF5] to-white min-h-screen font-sans">
  
      <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-[#FFFDF5] ">
        <div className="flex items-center gap-4 mb-2 ">
                    <img src={logo} alt="Carbon Compete Logo" className="w-10 h-10" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Carbon<br /> Compete
                    </h3>
                  </div>

      
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          <a href="#" className="text-gray-600 hover:text-[#00CCC0] hover:underline">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-[#00CCC0] hover:underline">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-[#00CCC0] hover:underline">
            CarbonGPT
          </a>
          <a href="#" className="text-gray-600 hover:text-[#00CCC0] hover:underline">
            Resources
          </a>
          <a href="#" className="text-gray-600 hover:text-[#00CCC0] hover:underline">
            Pricing
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-600 hover:text-[#00CCC0]">Login</button>
          <button className="px-4 py-2 text-white bg-[#00CCC0] rounded hover:bg-[#3ca49d]">
            Book a demo
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFDF5] shadow-md px-4 py-2 flex flex-col items-center transition-all">

          <nav className="space-y-2 text-center ">
            <a href="#" className="block text-gray-600 hover:text-[#00CCC0] hover:underline">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-[#00CCC0] hover:underline">
              Product
            </a>
            <a href="#" className="block text-gray-600 hover:text-[#00CCC0] hover:underline">
              CarbonGPT
            </a>
            <a href="#" className="block text-gray-600 hover:text-[#00CCC0] hover:underline">
              Resources
            </a>
            <a href="#" className="block text-gray-600 hover:text-[#00CCC0] hover:underline">
              Pricing
            </a>
          
          
            <button className="block w-full text-center text-gray-600 hover:text-[#00CCC0]">
              Login
            </button>
            <button className="block w-full px-4 py-2 text-white bg-[#00CCC0] rounded hover:bg-[#3ca49d]">
              Book a demo
            </button>
            </nav>
        </div>
      )}

      <section className="text-center px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-800">
          AI-Driven{" "}
          <span className="text-[#00CCC0]">Sustainability</span> at the Product
          Level
        </h1>
        <div className="mt-6 md:mt-12 space-x-2 md:space-x-4">
          <button className="px-3 py-1 md:px-4 md:py-2 text-white bg-black rounded-full hover:bg-gray-800">
            Sign up free →
          </button>
          <button className="px-3 py-1 md:px-4 md:py-2 text-black border border-gray-500 rounded-full hover:bg-gray-100">
            Request demo
          </button>
        </div>

        <div className="flex justify-center items-center mt-6 md:mt-12">
          <img
            src={image}
            alt="image"
            className="w-full max-w-md md:max-w-lg lg:max-w-4xl"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
