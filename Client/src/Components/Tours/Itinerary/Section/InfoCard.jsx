import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <FontAwesomeIcon icon={icon} className="text-red-500 text-4xl mb-2" />
      <p className="font-bold text-xl">{title}</p>
      <p className="text-md">{description}</p>
    </div>
  );
};

export default InfoCard;
