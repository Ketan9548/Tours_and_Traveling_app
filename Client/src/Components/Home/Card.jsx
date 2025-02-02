import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const Card = () => {
  const values = [
    {
      img: [img1, img2, img3, img4, img2, img3, img4],
      place: [
        "Nanital Car Service",
        "Dehradun Car Service",
        "Masuri Car Service",
        "Kedarnath Car Service",
        "Masuri Car Service",
        "Kedarnath Car Service",
        "Masuri Car Service",
        "Kedarnath Car Service",
      ],
      url: [],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Featured Products
      </h2>
      <div className="flex overflow-x-auto pb-4 gap-4 snap-x">
        {values[0].img.map((image, index) => (
          <div key={index} className="snap-start">
            <div className="bg-white flex-wrap rounded-lg shadow-md p-4 w-60 flex flex-col">
              <img
                src={image}
                alt={values[0].place[index]}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {values[0].place[index]}
              </h3>
              <p className="text-gray-600 mb-4"></p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
