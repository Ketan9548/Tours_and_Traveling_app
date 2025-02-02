import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Chardham from "../Blogs/Blogsimges/Chardham.jpg";
import Dehradun from "../Blogs/Blogsimges/Dehardun.jpg";
import Haridwar from "../Blogs/Blogsimges/Haridwar.jpg";
import Kedarnath from "../Blogs/Blogsimges/Kedarnath.webp";
import Masuri from "../Blogs/Blogsimges/Masuri.jpg";
import Nanital from "../Blogs/Blogsimges/Nanital.jpg";

const Servicepage = () => {
  const blogs = [
    { name: "Chardham", src: Chardham },
    { name: "Dehradun", src: Dehradun },
    { name: "Haridwar", src: Haridwar },
    { name: "Kedarnath", src: Kedarnath },
    { name: "Masuri", src: Masuri },
    { name: "Nanital", src: Nanital },
  ];

  const [dataval, setDataval] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/alldata");
      setDataval(response.data);
      console.log("the data is response is:", response);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-auto h-auto">
        <p className="text-center font-bold text-4xl sm:text-6xl">
          Taxi Service of Cabs
        </p>
        <div className="flex justify-center mt-4 px-4 sm:px-20">
          <div className="flex w-full sm:w-auto h-1 bg-gradient-to-r from-transparent via-black to-transparent rounded-lg shadow-md"></div>
        </div>
        {error ? (
          <p className="text-center text-red-500 font-bold">{error}</p>
        ) : (
          <div className="flex flex-wrap justify-center mt-9 border-2 border-black p-4 sm:mx-10 mb-3">
            {dataval.map((val, index) => (
              <div
                key={index}
                className="border-2 h-auto w-full sm:w-80 border-black p-4 m-2"
              >
                <div className="flex items-center mb-2">
                  <p className="mr-3">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold">{val.title}</h3>
                </div>
                <div className="m-2">
                  {val.list.map((route, idx) => (
                    <div
                      key={idx}
                      className="text-base sm:text-lg flex items-center font-serif m-1 border-b-2 border-black pb-2"
                    >
                      <span className="text-green-700">
                        <FontAwesomeIcon icon={faSquareCheck} />
                      </span>
                      <NavLink to="nanitalcar">
                        <span className="hover:text-orange-400 ml-2">
                          {route}
                        </span>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="m-4">
        <div className="flex bg-sky-700 text-white p-4 justify-center items-center">
          <p className="text-5xl font-bold mb-1">Our Blogs</p>
        </div>
        <div className="flex flex-col">
          {blogs.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row mb-4 mt-4">
              <div className="w-full lg:w-1/4 flex justify-center items-center mb-4 lg:mb-0">
                <img
                  src={item.src}
                  alt=""
                  className="border-2 border-gray-300 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center ml-0 lg:ml-12">
                <p className="text-3xl mb-1 hover:text-black font-bold text-yellow-400">
                  <NavLink to="/blogs">{item.name}</NavLink>
                </p>
                <p className="font-thin text-pretty text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  incidunt ut magnam fugiat eveniet eligendi placeat, dolores
                  cum voluptatum, maxime laboriosam animi in inventore dolor
                  dolorem sit soluta quidem! Quisquam, maiores fugit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Servicepage;
