import { useState } from "react";
import img1 from "./img/Uttarakhand.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cartype: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", phone: "", cartype: "", message: "" });
  };

  return (
    <div className="flex flex-col h-full w-full bg-blue-900">
      <div className="flex flex-col ml-4 md:ml-7 text-white p-4 md:p-6">
        <p className="text-xl md:text-3xl font-semibold mb-2">
          Rudrapur Car Rental - Contact Form
        </p>
        <p className="text-sm md:text-base">
          For more details about tours and vehicles, please contact us at
          <strong> +91XXXXXXXXX </strong> or email us at{" "}
          <strong>sample@gmail.com</strong>.
        </p>
      </div>
      <div className="flex flex-col md:flex-row m-4 md:m-11">
        <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
          <img
            className="max-w-full h-auto rounded-2xl border-2 border-blue-950 transform transition duration-500 hover:scale-110"
            src={img1}
            alt="Uttarakhand"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 md:ml-9">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-slate-500 shadow-md rounded-lg p-4 md:p-6"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white text-center">
              Contact Us
            </h2>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-white font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cartype"
                className="block text-white font-medium mb-2"
              >
                Car Types
              </label>
              <input
                type="text"
                id="cartype"
                name="cartype"
                value={formData.cartype}
                onChange={handleChange}
                placeholder="Enter your car type"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
