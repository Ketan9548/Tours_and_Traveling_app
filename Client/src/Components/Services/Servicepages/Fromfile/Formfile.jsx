import { useState } from "react";
import axios from "axios";

const Formfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: formData.name,
      Email: formData.email,
      Phone: formData.phone,
      Message: formData.message,
    };

    try {
      const response = await axios.post("https://your-endpoint", data);
      console.log(response.data);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="bg-blue-800 h-auto w-auto pb-8 pt-8">
      <p className="ml-8 md:ml-36 text-3xl font-bold text-white text-center md:text-left">
        Contact us at the numbers below to rent a car in Rudrapur.
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="ml-8 md:ml-56 mt-5">
          <p className="text-white mb-2">+91XXXXXXXXX</p>
          <p className="text-white">+91XXXXXXXXX</p>
          <p className="text-white font-bold mt-1">For More: Fill the Form</p>
        </div>
        <div className="mr-5 md:mr-11 mt-5 md:mt-0 h-full w-11/12 md:w-96 bg-yellow-400 p-4 rounded-lg">
          <form onSubmit={handleSubmit}>
            {["name", "email", "phone", "message"].map((field, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="4"
                    required
                  />
                ) : (
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formfile;
