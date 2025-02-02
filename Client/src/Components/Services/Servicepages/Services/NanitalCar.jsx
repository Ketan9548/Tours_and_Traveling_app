import Carinfo from "../CarInfo/Carinfo";
import Basicinfo from "../Basicinfo/Basicinfo";
import Formfile from "../Fromfile/Formfile";
import Rentalprice from "../Carrentalprice/Rentalprice";
import Imagefile from "../Image/Imagefile";

const NanitalCar = () => {
  return (
    <>
      <Imagefile />
      <Basicinfo />
      <Carinfo />
      <Rentalprice />
      <Formfile />
    </>
  );
};

export default NanitalCar;
