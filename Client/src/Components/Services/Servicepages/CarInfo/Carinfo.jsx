import Hatchback from "../../Images/Hatchback.webp";
import Sedan from "../../Images/Sedan.jpg";
import XUV from "../../Images/SUVXUV.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const Carinfo = () => {
  const data = [
    {
      name: "Hatchback Cars",
      price: "2000-2500",
      img: Hatchback,
      pricerate: [
        "Alto 800 Petrol: ₹ 2000",
        "Hyundai I10 grand MT Petrol: ₹ 2000",
        "Maruti Salario AT Petrol: ₹ 2200",
        "Hyundai I10 Nios MT Petrol: ₹ 2000",
        "Well-maintained interiors",
        "24/7 customer support",
      ],
    },
    {
      name: "Sedan Cars",
      price: "3000-3500",
      img: Sedan,
      pricerate: [
        "Honda City Petrol: ₹ 3200",
        "Hyundai Verna Petrol: ₹ 3500",
        "Toyota Corolla Diesel: ₹ 3400",
        "Well-maintained interiors",
        "24/7 customer support",
      ],
    },
    {
      name: "SUV/XUV Cars",
      price: "4000-5000",
      img: XUV,
      pricerate: [
        "Mahindra XUV Petrol: ₹ 4000",
        "Hyundai Creta Diesel: ₹ 4500",
        "Toyota Fortuner Diesel: ₹ 5000",
        "Well-maintained interiors",
        "24/7 customer support",
      ],
    },
  ];

  const features = [
    "AC, manual gear & car lock system",
    "Well-maintained interiors",
    "24/7 customer support",
    "Insurance coverage",
    "Affordable pricing options",
  ];

  return (
    <div className="mt-7">
      {/* Header Section */}
      <div className="w-full flex items-center justify-center h-36 bg-gray-700">
        <p className="text-4xl font-bold text-white">Our Car Rental Rates</p>
      </div>

      {/* Card Section */}
      <div className="mx-4 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((val, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <img className="rounded-t-lg w-full" src={val.img} alt={val.name} />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {val.name}
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                Available for ₹ {val.price} per day
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                {val.pricerate.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <NavLink
                to="/from"
                className="inline-flex mt-3 items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Click here
                <svg
                  className="rtl:rotate-180 w-4 h-4 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-8 px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          All of our self-drive cars include:
        </h2>
        <ul className="mt-4 space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-700 dark:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-red-500 text-xl mr-3"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carinfo;
