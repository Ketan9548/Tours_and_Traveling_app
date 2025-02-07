import { assestfile } from "../../assets/assetsfile";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(assestfile.avtar_file);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  async function fetchval() {
    try {
      const response = await axios.get("api/users");
      console.log(typeof response);
    } catch (error) {
      console.error(
        "The error in fetching the data Users in the server",
        error
      );
    }
  }

  useEffect(() => {
    fetchval();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-yellow-700 bg-opacity-80 p-4 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center flex-col md:flex-row space-x-0 md:space-x-4">
        <NavLink to="addservice">
          <img
            className="h-10 md:h-12 w-auto"
            src={assestfile.logo_img || ""}
            alt="logo"
          />
        </NavLink>
        <p className="text-lg md:text-xl font-bold text-white tracking-wider mt-2 md:mt-0">
          Admin Panel
        </p>
      </div>

      {/* Navigation and Profile Section */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
        {location.pathname === "/addservice" ||
          location.pathname === "/list" ||
          location.pathname === "/customer_reviews" ? (
          <div className="bg-white p-2 border-2 border-white rounded-3xl pl-4 pr-4 text-black">
            <NavLink
              onClick={handleLogout}
              to="/"
              className="text-sm md:text-base font-medium transition duration-300"
            >
              Logout
            </NavLink>
          </div>
        ) : (
          <div className="bg-white p-2 border-2 border-white rounded-3xl pl-4 pr-4 text-black">
            <NavLink
              to="login"
              className="text-sm md:text-base font-medium transition duration-300"
            >
              Login
            </NavLink>
          </div>
        )}

        {location.pathname === "/registration" ? (
          <div className="bg-white p-2 border-2 border-white rounded-3xl pl-4 pr-4 text-black">
            <NavLink
              to="/addservice"
              className="text-sm md:text-base text-black font-medium transition duration-300"
            >
              Home
            </NavLink>
          </div>
        ) : null}

        <div className="bg-white p-2 border-2 border-white rounded-3xl pl-4 pr-4 text-black">
          <NavLink
            to="registration"
            className="text-sm md:text-base text-black font-medium transition duration-300"
          >
            Registration
          </NavLink>
        </div>

        {/* Profile Image */}
        <div className="relative cursor-pointer group flex justify-center items-center">
          <img
            className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover border-2 border-white shadow-lg"
            src={profileImage}
            alt="profile_image"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            title="Change Profile Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
