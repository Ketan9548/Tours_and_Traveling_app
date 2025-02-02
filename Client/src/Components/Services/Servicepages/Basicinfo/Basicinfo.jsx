import React from "react";

const Basicinfo = () => {
  return (
    <>
      <div className="px-4">
        <div className="flex flex-col justify-center items-center">
          {/* Title */}
          <p className="text-2xl md:text-4xl font-bold text-center">
            Car Rental Rudrapur
          </p>
          {/* Decorative lines */}
          <div className="bg-black h-0.5 w-3/4 sm:w-1/2 md:w-96 mt-2"></div>
          <div className="bg-black h-0.5 w-3/4 sm:w-1/2 md:w-96 mt-1"></div>
          {/* Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-justify md:text-center leading-relaxed max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            tempora placeat optio eum numquam neque iusto expedita eius ad
            corrupti, soluta, consequuntur officiis quasi porro fugit totam?
            Voluptatibus nesciunt quas ratione quasi? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Dolorem soluta eos repellendus,
            maxime minima laborum deserunt id accusamus autem itaque et!
            Eveniet!
          </p>
          {/* Contact info */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-center">
            Checkout our complete Rudrapur car rental offerings below, & feel
            free to contact our manager
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-center">
            Mr. xyz at +91XXXXXXXXXX
          </p>
          <p className="text-sm sm:text-base md:text-lg text-center">
            Mr. xyz at +91XXXXXXXXXX
          </p>
        </div>
      </div>
    </>
  );
};

export default Basicinfo;
