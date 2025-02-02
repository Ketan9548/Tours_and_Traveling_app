import Card from "./Card";
import banner from "../../assets/Banner.webp";
import banner2 from "../../assets/Banner2.jpg";
import banner3 from "../../assets/Banner3.jpg";
import banner4 from "../../assets/Banner4.jpg";
import FormInfo from "./FormInfo";
import Review_Customer from "../Review_Page/Review_Customer";
import Service from "../Services/Service";
import Milestone from "../Services/Milestone";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-screen overflow-hidden">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="duration-700 opacity-90 h-full ease-in-out"
            data-carousel-item
          >
            <div className="flex flex-col justify-center items-center h-full w-full text-center">
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl italic text-white font-bold drop-shadow-lg mb-4">
                Discover Your Next Tours
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md px-4">
                Explore the most stunning destinations with curated tours
                tailored just for you.
              </p>
              <NavLink
                to="services"
                className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out"
              >
                Explore Tours
              </NavLink>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative duration-700 h-full ease-in-out"
            data-carousel-item
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
            <div className="flex flex-col justify-end items-start h-full w-full p-6 sm:p-10 space-y-2 sm:space-y-4 text-left">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
                Adventure Awaits
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-md">
                Let us guide you to the most breathtaking places in the world.
              </p>
              <button className="px-4 sm:px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500">
                Book Now
              </button>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={banner3}
              className="absolute inset-0 object-cover w-full h-full"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={banner4}
              className="absolute inset-0 object-cover w-full h-full"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="border-8 border-yellow-300 p-4">
        <Card />
      </div>
      <div className="bg-white py-10 border-8 flex flex-col border-amber-300">
        <div className="ml-32 flex justify-center sm:mr-52">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-black text-center mb-8">
            Best Destinations to Visit in Uttarakhand
          </h1>
        </div>
        <div className="grid grid-cols-1 bg-cyan-50 sm:grid-cols-2 px-8">
          <FormInfo place="Nainital" day="2" />
          <FormInfo place="Dehradun" day="3" />
          <FormInfo place="Mussoorie" day="4" />
          <FormInfo place="Kedarnath" day="1" />
        </div>
      </div>
      <p className="bg-black h-1"></p>
      <div>
        <Review_Customer />
      </div>
      <p className="bg-black h-1"></p>
      <div>
        <Service />
      </div>
      <p className="bg-black h-1"></p>
      <div>
        <Milestone />
      </div>
    </>
  );
};

export default Home;
