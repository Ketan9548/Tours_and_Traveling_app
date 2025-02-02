import Nanital from ".././Blogs/Blogsimges/Nanital.jpg";
import Masuri from ".././Blogs/Blogsimges/Masuri.jpg";
import Kedarnath from ".././Blogs/Blogsimges/Kedarnath.webp";
import Dehradun from ".././Blogs/Blogsimges/Dehardun.jpg";
import Chardham from ".././Blogs/Blogsimges/Chardham.jpg";
import Haridwar from ".././Blogs/Blogsimges/Haridwar.jpg";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  const arr1 = [
    {
      img: Nanital,
      location: "Nanital",
      cab: "Rudrapur Cabs",
      date: "September 15th, 2022",
      url: "nanitalblogs",
    },
    {
      img: Masuri,
      location: "Masuri",
      cab: "Rudrapur Cabs",
      date: "September 15th, 2022",
      url: "masuriblogs",
    },
    {
      img: Kedarnath,
      location: "Kedarnath",
      cab: "Rudrapur Cabs",
      date: "January 21th, 2020",
      url: "kedarnathblogs",
    },
    {
      img: Dehradun,
      location: "Dehradun",
      cab: "Rudrapur Cabs",
      date: "May 09th, 2023",
      url: "dehradunblogs",
    },
    {
      img: Chardham,
      location: "Chardham",
      cab: "Rudrapur Cabs",
      date: "November 15th, 2022",
      url: "chardhamblogs",
    },
    {
      img: Haridwar,
      location: "Haridwar",
      cab: "Rudrapur Cabs",
      date: "December 10th, 2019",
      url: "Haridwar",
    },
  ];

  return (
    <div className="mr-14 mt-6 w-auto sm:ml-8 lg:ml-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arr1.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              className="w-full hover:scale-105 transform transition duration-300 h-72 object-cover rounded-md mb-4"
              src={item.img}
              alt={item.location}
            />
            <div className="text-center">
              <p className="text-lg font-bold text-blue-600">
                <NavLink to={item.url}>{`Explore ${item.location}`}</NavLink>
              </p>
              <p className="text-sm font-light">
                <span className="text-blue-950">{`B y ${item.cab}`}</span> |{" "}
                <span className="text-red-600">{item.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
