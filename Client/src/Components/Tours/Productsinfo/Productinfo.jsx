import React from 'react';
import chardham from '../../Blogs/Blogsimges/Chardham.jpg';
import { NavLink } from 'react-router-dom';

const Productinfo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {/* Hero Section */}
      <div className='flex flex-col justify-center items-center mx-8 md:mx-32 mb-20 mt-10 text-center'>
        <img className='w-full max-h-[500px] object-cover rounded-2xl shadow-xl' src={chardham} alt="Chardham Banner" />
        <p className='mt-11 text-black font-bold text-4xl md:text-5xl'>
          Welcome to Chardham Tours
        </p>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl">
          Explore the spiritual Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis deleniti fuga placeat, in minus aperiam, maiores tempora saepe hic, vitae aliquid beatae? Expedita, cum quo? Maxime sunt, libero, earum eligendi deleniti distinctio possimus esse quasi, ea assumenda quas. A ullam neque blanditiis. journey of Chardham with us. Discover serene landscapes, sacred temples, and unforgettable experiences.
        </p>
      </div>

      {/* Product Cards */}
      <div className='flex flex-col m-12 md:flex-row justify-center items-center mx-8 md:mx-20 gap-9'>
        <div
          className='bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out max-w-sm'
        >
          <img className='w-full h-64 object-cover' src={chardham} />
          <div className='p-4'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Chardham Destination 1</h3>
            <p className='text-gray-600 mb-4'>
              Discover the wonders of this sacred site and enjoy a serene experience like never before.
            </p>
            <NavLink to="/nanitalcar" onClick={handleClick} className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
              Taxi Tours
            </NavLink>
          </div>
        </div>
        <div
          className='bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out max-w-sm'
        >
          <img className='w-full h-64 object-cover' src={chardham} />
          <div className='p-4'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Chardham Destination 2</h3>
            <p className='text-gray-600 mb-4'>
              Discover the wonders of this sacred site and enjoy a serene experience like never before.
            </p>
            <NavLink to="/chardhamblogs" onClick={handleClick} className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
              Visit More Itenary
            </NavLink>
          </div>
        </div>
      </div >
    </>
  );
};

export default Productinfo;
