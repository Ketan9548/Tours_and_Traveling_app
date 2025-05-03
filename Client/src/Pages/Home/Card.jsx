import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import { useNavigate, useParams } from 'react-router-dom';
import { ApiContext } from "../../context/Contextdata";
import { useContext } from "react";

const Card = () => {
  const navigate = useNavigate();
  const cards = [
    {
      img: img1,
      title: "Chardham Car Service",
    },
    {
      img: img2,
      title: "Dehradun Car Service",
    },
    {
      img: img3,
      title: "Mussoorie Car Service",
    },
  ];

  const { Tours } = useContext(ApiContext);
  const { id } = useParams();
  const tours = Tours.find((item) => item.id.toString() === id);

  const redirect = (id) => {
    navigate(`/tours/${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
                alt={Tours.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <button onClick={() => redirect(tours.id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto">
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
