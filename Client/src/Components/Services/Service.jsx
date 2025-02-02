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

const Service = () => {
  const services = [
    { icon: faTaxi, label: "Taxi" },
    { icon: faBus, label: "Bus" },
    { icon: faBusinessTime, label: "Business" },
    { icon: faMountain, label: "Mountains" },
    { icon: faHotel, label: "Hotels" },
    { icon: faShop, label: "Public Place" },
    { icon: faTruckFast, label: "Deleviry" },
    { icon: faCompass, label: "Tourse" },
    { icon: faPerson, label: "Toure Guide" },
    { icon: faIdCard, label: "Hire Driver" },
  ];

  return (
    <div className="m-5">
      <div className="grid grid-cols-5 gap-5">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-white text-2xl border-2 rounded-full bg-orange-400 p-4 flex justify-center">
              <FontAwesomeIcon icon={service.icon} />
            </p>
            <p className="mt-3 text-center">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
