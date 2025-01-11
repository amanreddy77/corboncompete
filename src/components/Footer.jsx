import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 via-[#f8f8f8] to-[#fff9f5] py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <img src={logo} alt="Carbon Compete Logo" className="w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-900">
              Carbon<br /> Compete
            </h3>
          </div>
          <p className="text-gray-700 text-sm mb-6">
            CarbonCompete brings innovative and critical changes in the product
            supply chain to support sustainability, enabling industries to
            drive competition and return on investment while reducing carbon
            emissions.
          </p>
          <div className="flex gap-4 border-1  bg-slate-50">
            <a
              href="#"
              className=" text-gray-600 p-4 rounded-full"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className=" text-gray-600 p-4 rounded-full "
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className=" text-gray-600 py-4 px-2 rounded-full "
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-teal-500 font-bold mb-4">Home</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="#" className="hover:text-teal-500">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                White Paper
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-teal-500 font-bold mb-4">
            Climatequant Tech Private Limited
          </h4>
          <address className="not-italic text-gray-700 text-sm mb-4">
            NO.1, Velleeswaran Nagar, Mangadu, Chennai - 600122, Tamil Nadu, India.
          </address>
          <p className="text-gray-700 text-sm mb-2">
            <a href="mailto:info@carboncompete.com" className="hover:text-teal-500">
              info@carboncompete.com
            </a>
          </p>
          <p className="text-gray-700 text-sm">
            <a
              href="https://www.carboncompete.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500"
            >
              www.carboncompete.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-12 text-left text-sm text-gray-500 border-t border-gray-200 pt-4">
        Copyright 2024 CarbonCompete. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
