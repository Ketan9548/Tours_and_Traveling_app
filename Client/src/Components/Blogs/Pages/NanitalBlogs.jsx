import React from "react";
import Nanitalimg from "../Blogsimges/Nanital.jpg";
import Rudrapurimg from "./blogsimg/Rudrapur.jpg";

const NanitalBlogs = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-gray-50">
        <div className="w-[90%] md:w-[74%] h-[60%] md:h-[80%]">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src={Nanitalimg}
            alt="Beautiful view of Nanital"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full px-6 md:px-24 mt-8 gap-8">
        <div className="flex-1 w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            City Near Nanital
          </h1>
          <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            dicta cupiditate ex debitis ipsum labore nam animi magnam qui vero
            nihil officiis eaque omnis vitae fugiat, voluptates nostrum eius
            exercitationem quod repellendus?
          </p>
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <React.Fragment key={index}>
                <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
                  Rudrapur
                </h2>
                <p className="text-lg font-serif leading-relaxed text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus sunt quas eveniet, ratione sit eaque distinctio
                  consequuntur, quam iusto ullam mollitia sint est laboriosam.
                  Unde aliquam cumque nulla incidunt animi ipsum ad. Enim
                  laudantium dolore laboriosam...
                </p>
              </React.Fragment>
            ))}
        </div>
        <div className="relative w-auto">
          <div className="sticky top-1">
            <div className="w-full md:w-auto flex justify-center items-start">
              <img
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md"
                src={Rudrapurimg}
                alt="Rudrapur"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NanitalBlogs;
