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
  const { tours } = useContext(ApiContext)

  const validID = tours.map((val) => val.id);

  const Tours = tours.find((item) => item.id.toString() === id);

  if (!validID) {
    return <h2 className="text-center mt-10 text-red-500 text-2xl"> Info Not Found</h2>;
  }
  return (
    <>
      <Imagefile />
      <Basicinfo Name={Tours.name} />
      <Carinfo />
      <Rentalprice Name={Tours.name} />
      <Formfile />
    </>
  );
};  

export default NanitalCar;
