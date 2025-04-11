import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";

const FormInfo = ({ place, day }) => {
  return (
    <>
      <div className="hover:m-2 hover:cursor-pointer flex flex-wrap md:flex-nowrap mx-4 md:mx-9 my-6 border-2 border-teal-700 rounded-xl bg-gradient-to-l from-cyan-100 to-brown-100 shadow-lg">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-xl md:text-3xl font-serif font-bold cursor-pointer text-black">
            {place}
          </h1>
          <p className="text-md md:text-lg font-bold font-sans text-black mt-2">
            District - Nainital
          </p>
          <p className="text-md md:text-lg font-bold font-sans text-black">
            Trip - {day} Days
          </p>
          <p className="mt-4 text-sm md:text-base text-black leading-relaxed font-serif">
            Nainital is blessed with breathtaking natural beauty. The star
            attraction of the town is the Naini Lake, a serene water body
            surrounded by lush green hills. The picturesque landscapes and
            pleasant weather make it an ideal retreat for nature lovers. Boating
            on the Naini Lake is an iconic experience in Nainital.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center bg-yellow-100 rounded-xl">
          <div className="w-full mb-4">
            <iframe
              width="100%"
              height="200"
              className="md:h-260 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/CJJTRdaPkmU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBinoculars}
              className="text-2xl md:text-4xl text-yellow-500"
            />
            <span className="ml-3 text-md md:text-lg font-bold text-green-800">
              Nearby Top Tourist Places
            </span>
          </div>
          <div className="mt-2 text-gray-700 font-bold text-sm md:text-base">
            <ol className="list-decimal ml-6">
              <li>Boat Ride in Naini Lake</li>
              <li>Mall Road</li>
              <li>Naina Devi Temple</li>
              <li>Tiffin Top (Dorothy’s Seat)</li>
              <li>Nainital Zoo</li>
              <li>Hanuman Garhi</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInfo;
