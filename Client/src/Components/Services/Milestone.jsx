import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faThumbsUp,
  faEarthOceania,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

const Milestone = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const startCounting = (setCounter, target, increment, intervalTime) => {
    const interval = setInterval(() => {
      setCounter((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval);
          return target;
        }
        return prevCount + increment;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  };

  useEffect(
    () => startCounting(setCount, 5252, 30, 1),
    startCounting(setCount1, 2000, 2, 3),
    startCounting(setCount2, 80, 1, 5),
    startCounting(setCount3, 97, 1, 5),
    []
  );

  return (
    <div className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="p-4 bg-white shadow-lg rounded-xl flex flex-col items-center">
        <p className="text-6xl text-black">{count}</p>
        <FontAwesomeIcon
          icon={faUsers}
          className="text-orange-400 text-4xl mt-4"
        />
        <p className="mt-4 text-black font-bold">Customers</p>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-xl flex flex-col items-center">
        <p className="text-6xl text-black">{count1}</p>
        <FontAwesomeIcon
          icon={faCar}
          className="text-yellow-300 text-4xl mt-4"
        />
        <p className="mt-4 text-black font-bold">Number of Trips</p>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-xl flex flex-col items-center">
        <p className="text-6xl text-black">{count2}</p>
        <FontAwesomeIcon
          icon={faEarthOceania}
          className="text-green-500 text-4xl mt-4"
        />
        <p className="mt-4 text-black font-bold">Trip Types</p>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-xl flex flex-col items-center">
        <p className="text-6xl text-black">{count3}%</p>
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="text-red-500 text-4xl mt-4"
        />
        <p className="mt-4 text-black font-bold">Customer Satisfaction</p>
      </div>
    </div>
  );
};

export default Milestone;
