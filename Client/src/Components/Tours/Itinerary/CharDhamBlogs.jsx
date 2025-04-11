import React, { useEffect, useState } from "react";
import img1 from "../Carosalimg/images1.jpg";
import img2 from "../Carosalimg/images2.jpg";
import img3 from "../Carosalimg/images3.jpg";
import img4 from "../Carosalimg/images4.jpg";
import img5 from "../Carosalimg/images5.jpg";
import InfoCard from "./Section/InfoCard";
import GradeCard from "./Section/GradeCard";
import {
  faEarth,
  faClock,
  faPersonHiking,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Details from "./Section/Details";
import Overview from "./Section/Overview";
import Itinerary from "./Section/Itinerary";

const CharDhamBlogs = () => {
  const [duration, setDuration] = useState(0);
  const [altitude, setAltitude] = useState(0);
  const [trackingArea, setTrackingArea] = useState(0);
  const [height, setHeight] = useState([0, 0, 0, 0]);
  const targetHeight = [13, 23, 39, 49];

  const price = 3000;
  const name = [
    "+5% GST (goods and services tax).",
    "Services Lohajung to Lohajung.",
    "Meeting Point: Opposite Shiv Vilas Hotel, Tapovan, Rishikesh.",
    "Reporting Time: 6:00 am",
    "Drop Time: 6:30 pm to 7:30 pm (subject to weather conditions).",
    "Please reach Rishikesh a day before to avoid delays.",
  ];

  const animateHeights = () => {
    targetHeight.forEach((target, index) => {
      setTimeout(() => {
        setHeight((prev) => {
          const newHeight = [...prev];
          newHeight[index] = target;
          return newHeight;
        });
      }, index * 500);
    });
  };

  const controller = (setController, target, increment, timeInterval) => {
    const interval = setInterval(() => {
      setController((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, timeInterval);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    animateHeights();
    controller(setDuration, 3, 0.5, 60);
    controller(setAltitude, 1427, 10, 1);
    controller(setTrackingArea, 12, 1, 50);
  }, []);

  const carouselImages = [img1, img2, img3, img4, img5];

  return (
    <div className="w-full">
      {/* Carousel */}
      <div className="relative w-full mb-10">
        <div className="relative h-56 overflow-hidden md:h-96">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <img
                src={image}
                className="w-full h-full object-cover shadow-lg"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-800/50 rounded-full group-hover:bg-gray-800/70">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-800/50 rounded-full group-hover:bg-gray-800/70">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-4 py-6">
        <InfoCard
          icon={faEarth}
          title="Region"
          description="Uttarakhand | Dehradun"
        />
        <InfoCard
          icon={faClock}
          title="Duration"
          description={`${duration} days`}
        />
        <InfoCard
          icon={faPersonHiking}
          title="Altitude"
          description={`${altitude} Ft.`}
        />
        <InfoCard
          icon={faMapLocationDot}
          title="Tracking Area"
          description={`${trackingArea} Km`}
        />
        <GradeCard height={height} />
      </div>

      <div className="mx-auto max-w-4xl px-4 mb-10">
        <Details names={name} price={price} />
      </div>

      <div className="mx-auto max-w-4xl mb-10 px-4">
        <Overview />
      </div>
      <div className="mx-auto max-w-4xl px-4">
        <Itinerary />
      </div>
    </div>
  );
};

export default CharDhamBlogs;
