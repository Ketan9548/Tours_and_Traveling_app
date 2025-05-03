import Carinfo from "../CarInfo/Carinfo";
import Basicinfo from "../Basicinfo/Basicinfo";
import Formfile from "../Fromfile/Formfile";
import Rentalprice from "../Carrentalprice/Rentalprice";
import Imagefile from "../Image/Imagefile";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../../../../context/Contextdata";

const NanitalCar = () => {
  const { id } = useParams();
  const { Tours } = useContext(ApiContext)

  const validID = Tours.map((val) => val.id);

  const tours = Tours.find((item) => item.id.toString() === id);

  if (!validID) {
    return <h2 className="text-center mt-10 text-red-500 text-2xl"> Info Not Found</h2>;
  }
  return (
    <>
      <Imagefile />
      <Basicinfo Name={tours.name} />
      <Carinfo />
      <Rentalprice Name={tours.name} />
      <Formfile />
    </>
  );
};  

export default NanitalCar;
