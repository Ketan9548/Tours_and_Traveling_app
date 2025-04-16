import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTaxi,
  faBus,
  faBusinessTime,
  faMountain,
  faHotel,
  faShop,
  faTruckFast,
  faCompass,
  faPerson,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const ToursPlaceService = () => {
  const services = [
    { icon: faTaxi, label: "Taxi" },
    { icon: faBus, label: "Bus" },
    { icon: faBusinessTime, label: "Business" },
    { icon: faMountain, label: "Mountains" },
    { icon: faHotel, label: "Hotels" },
    { icon: faShop, label: "Public Place" },
    { icon: faTruckFast, label: "Delivery" },
    { icon: faCompass, label: "Tours" },
    { icon: faPerson, label: "Tour Guide" },
    { icon: faIdCard, label: "Hire Driver" },
  ];

  return (
    <div className="m-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <p className="text-white text-2xl border-2 rounded-full bg-orange-400 p-4 w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={service.icon} />
            </p>
            <p className="mt-2 text-sm font-medium">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPlaceService;
