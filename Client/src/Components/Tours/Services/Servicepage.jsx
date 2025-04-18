import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Chardham from "../../Blogs/Blogsimges/Chardham.jpg";
import Dehradun from "../../Blogs/Blogsimges/Dehardun.jpg";
import Haridwar from "../../Blogs/Blogsimges/Haridwar.jpg";
import Kedarnath from "../../Blogs/Blogsimges/Kedarnath.webp";
import Masuri from "../../Blogs/Blogsimges/Masuri.jpg";
import Nanital from "../../Blogs/Blogsimges/Nanital.jpg";
import { ApiContext } from "../../../context/Contextdata";
import { useNavigate } from "react-router-dom";

const Servicepage = () => {
  const blogs = [
    { id: 1, name: "Chardham", src: Chardham },
    { id: 2, name: "Dehradun", src: Dehradun },
    { id: 3, name: "Haridwar", src: Haridwar },
    { id: 4, name: "Kedarnath", src: Kedarnath },
    { id: 5, name: "Masuri", src: Masuri },
    { id: 6, name: "Nanital", src: Nanital },
  ];
  const navigete = useNavigate();

  const Tours = [
    {
      id: 1,
      name: "Nanital",
      img: Nanital
    },
    {
      id: 2,
      name: "Dehradun",
      img: Dehradun
    }
    ,
    {
      id: 3,
      name: "Masuri",
      img: Masuri
    }
  ]

  const { error, loading } = useContext(ApiContext);

  return (
    <>
      <div className="w-auto h-auto">
        <p className="text-center font-bold text-4xl sm:text-6xl">
          Taxi Service of Cabs
        </p>
        <div className="flex justify-center mt-4 px-4 sm:px-20">
          <div className="flex w-full sm:w-auto h-1 bg-gradient-to-r from-transparent via-black to-transparent rounded-lg shadow-md"></div>
        </div>
        {loading ? (
          <p className="text-center text-blue-500 font-semibold">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 font-bold">{error.message}</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 p-6">
            {Tours && Tours.map((val, index) => (
              <div
                key={index}
                className="w-full sm:w-80 bg-white border border-gray-300 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <img src={val.img} alt="" />
                <h2 onClick={() => navigete(`/productinfo/${val.id}`)} className="text-xl font-bold cursor-pointer text-center text-blue-700 mb-4">
                  {val.name}
                </h2>
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
