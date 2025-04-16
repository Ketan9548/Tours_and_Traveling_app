import { useState } from "react";
import Maps from "./Maps/Maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Contact: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // const url = "https://backend-of-tours.onrender.com"
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.Name,
      email: formData.Email,
      phone: formData.Contact,
      message: formData.Message,
    };

    try {
      const response = await axios.post(`http://localhost:3000/api/customercontact`, data);

      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


  const icons = [
    {
      icon: faLocationDot,
      label: "Address",
      value: "Plot No-3, Near XYZ Place, Rudradup, Uttarakhand, 223122",
    },
    { icon: faPhone, label: "Phone", value: "91XXXXXXXXX" },
    { icon: faEnvelope, label: "Email", value: "Sample@gmail.com" },
  ];

  return (
    <>
      <ToastContainer />
      <div className="m-4">
        <div className="p-4">
          <Maps />
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mt-11">
            {icons.map((item, index) => (
              <div key={index} className="m-3">
                <div className="flex items-center">
                  <p className="mt-3 border-2 border-amber-200 p-2 rounded-3xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </p>
                  <h2 className="text-2xl ml-4 font-bold mt-3">{item.label}</h2>
                </div>
                <p className="w-48 font-serif text-xl mt-1 ml-12">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-start mt-6 md:mr-20">
            <div className="w-full md:w-96 mt-6 mb-5 bg-amber-600 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Enter your name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Contact
                  </label>
                  <input
                    type="number"
                    name="Contact"
                    placeholder="Enter your phone"
                    value={formData.Contact}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    placeholder="Enter your message"
                    value={formData.Message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mx-4 md:mx-10 lg:mx-36 xl:mx-40">
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-sans text-center md:text-start">
              Direct Contact Info
            </h1>
          </div>
          <div className="mt-3">
            <p className="text-sm md:text-base text-justify font-semibold leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              aliquam quo, neque explicabo ex ad. Illo aspernatur sequi ipsa
              deserunt eaque ut tenetur qui modi? Maxime quod temporibus nihil,
              fuga pariatur eos possimus dolor! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Corporis assumenda voluptatum
              explicabo porro cupiditate blanditiis corrupti deserunt, error nobis
              iste asperiores esse distinctio eum fugit sequi eos quas! Nihil
              nisi, cum dicta facere deleniti, molestias esse dolor doloribus
              eius, error quaerat optio sequi quas repudiandae harum! Quas
              repudiandae ut iure nihil numquam illum assumenda quibusdam esse eos
              nisi velit suscipit eum explicabo, eaque neque dolor earum dolorem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
