import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../../context/Contextdata";

const BlogsLists = () => {
  const { blogs } = useContext(ApiContext);

  return (
    <div className="mr-14 mt-6 w-auto sm:ml-8 lg:ml-12">
      <div className="grid pl-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full hover:scale-105 transform transition duration-300 h-72 object-cover rounded-md mb-4"
              src={item.img}
              alt={item.location}
            />
            <div className="text-center">
              <p className="text-lg font-bold text-blue-600 hover:text-blue-800 transition duration-300">
                <NavLink
                  to={`/blogspages/${item.id}`}
                  className="focus:outline-none focus:underline"
                >
                  {`Explore ${item.location}`}
                </NavLink>
              </p>
              <p className="text-sm font-light">
                <span className="text-blue-950">{`By ${item.cab}`}</span> |{" "}
                <span className="text-red-600">{item.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsLists;
