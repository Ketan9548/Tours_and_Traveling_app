import React, { useEffect } from "react";
import { useState } from "react";

const GradeCard = ({ height }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex space-x-2 items-end">
        {height.map((height, index) => (
          <div
            key={index}
            style={{
              height: `${height}px`,
              width: "8px",
              backgroundColor: "red",
              transition: "height 0.5s ease",
            }}
            className="rounded-md"
          ></div>
        ))}
      </div>
      <p className="font-bold text-xl mt-2">Grade</p>
      <p className="text-md">Easy to Moderate</p>
    </div>
  );
};

export default GradeCard;
