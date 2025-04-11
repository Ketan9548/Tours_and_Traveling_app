import { NavLink } from "react-router-dom";
import logo from "./logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white p-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-5 md:mb-0">
          <p className="font-bold text-xl">Head Office Phone Number:</p>
          <p>
            <a
              href="tel:+1234567890"
              className="text-gray-200 hover:text-gray-100 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-gray-200">
            Address: 123 Main St, Uttarakhand, India
          </p>
          <p>
            <a
              href="mailto:info@uttarakhandtaxi.com"
              className="text-gray-200 hover:text-gray-100 hover:underline"
            >
              info@uttarakhandtaxi.com
            </a>
          </p>
        </div>
        <div className="mb-5 md:mb-0">
          <p className="font-bold text-xl">Service Locations</p>
          <p className="text-gray-200">Nainital</p>
          <p className="text-gray-200">Dehradun</p>
          <p className="text-gray-200">Mussoorie</p>
          <p className="text-gray-200">Kedarnath</p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <NavLink to="/home">
            <p className="font-bold text-xl mb-2 text-gray-200 hover:text-gray-100 hover:underline">
              Welcome Here
            </p>
          </NavLink>
          <div className="flex items-center mt-2">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-14 mr-2 rounded-full"
            />
            <p className="text-center text-gray-200">
              Uttarakhand Taxi Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
