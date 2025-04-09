import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

const Card = () => {
  const cards = [
    {
      img: img1,
      title: "Nainital Car Service",
    },
    {
      img: img2,
      title: "Dehradun Car Service",
    },
    {
      img: img3,
      title: "Mussoorie Car Service",
    },
    {
      img: img3,
      title: "Mussoorie Car Service",
    },
  ];

  return (
    <>
      <h2 className="text-2xl flex text-center justify-center font-semibold mb-6 text-gray-800">
        Services
      </h2>
      <div className="flex justify-center mx-auto px-4 py-8">

        <div className="flex overflow-x-auto space-x-4 px-2 scrollbar-hide">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-lg shadow-md p-4 flex-shrink-0 mx-2 snap-start"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto">
                More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
