const Abouts = () => {
  return (
    <div className="h-screen px-4 md:px-8 lg:px-12">
      <div className="flex justify-center mt-8">
        <p className="text-black font-bold text-4xl md:text-6xl lg:text-8xl text-center">
          Welcome to Tour App
        </p>
      </div>
      <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
        <p className="text-lg md:text-xl font-semibold">About Us</p>
      </div>

      <div className="mt-6 md:mt-8 lg:mt-10">
        <p className="font-thin text-sm md:text-base lg:text-lg leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          non ducimus quibusdam quod voluptatibus dolore eaque hic, laborum
          accusamus est tempore quos, nesciunt soluta aliquam nulla maxime illo
          sequi tempora harum? Officia alias velit blanditiis quaerat itaque
          corporis error nobis. Amet quo non similique doloribus aliquam sequi
          culpa vel expedita a corporis facere ipsum dolore voluptas laudantium,
          voluptatem earum quod consequatur harum, nam eos. Quasi autem
          necessitatibus quam sapiente molestiae, quo id consequatur corrupti,
          amet error sit molestias iusto vel assumenda quibusdam eos...
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-14">
        <div className="mb-6 md:mb-0 md:mr-14 ml-4 cursor-pointer text-center md:text-left">
          <p className="font-bold mb-2">Address:</p>
          <p>Uttar Pradesh, Noida Sector-51, PIN-21XXX</p>
        </div>
        <div className="ml-4 md:ml-8 cursor-pointer text-center md:text-left">
          <p className="font-bold mb-2">Contact Us:</p>
          <p>Phone: 9548XXXXXXX</p>
          <p>Email: sample@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
