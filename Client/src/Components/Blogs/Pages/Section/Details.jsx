import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";

const Details = ({ price, names = [] }) => {
  return (
    <>
      <div className="border-spacing-x-96 border-4">
        <div className="w-full flex justify-center px-4">
          <div className="w-full sm:w-auto flex justify-center bg-red-600 rounded-md">
            <p className="p-3 font-bold text-2xl md:text-3xl text-white text-center">
              {price}/
              <span className="text-lg md:text-xl">
                Person{" "}
                <span className="text-2xl">
                  <FontAwesomeIcon icon={faIndianRupee} />
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-between px-4 mt-4 gap-4">
          {/* Names List */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <ol className="list-disc pl-5">
              {names.map((name, index) => (
                <li
                  className="mb-2 text-base sm:text-lg md:text-lg text-gray-800"
                  key={index}
                >
                  {name}
                </li>
              ))}
            </ol>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <p>Additional Info</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
