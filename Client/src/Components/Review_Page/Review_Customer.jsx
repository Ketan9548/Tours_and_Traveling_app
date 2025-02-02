import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Review_Customer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.number,
      message: formData.message,
    };
    try {
      await axios.post("/customerreview", data)
      .then((res)=> console.log(res.data));
      setSubmitted(true);
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between bg-blue-gray-800 p-4 lg:p-8">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left lg:ml-8">
        <h1 className="text-black font-bold text-xl md:text-3xl mb-4">
          Book Your Ride and Share Your Valuable Feedback
        </h1>
        <p className="text-black text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et
          adipisci consequatur perferendis eveniet nulla praesentium incidunt
          ratione unde beatae! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minima impedit, accusamus iure laudantium deserunt delectus.
          Mollitia distinctio aut vitae aliquid voluptate impedit, sunt
          assumenda expedita eligendi non aspernatur consectetur perferendis
          animi eius maiores sit dicta tenetur eveniet blanditiis laboriosam
          consequatur! Architecto fugit, recusandae consequuntur eos voluptas
          totam veritatis, dignissimos incidunt officia et nisi alias iure,
          obcaecati labore dolorem! Voluptatum omnis et, quod ratione, earum
          quisquam perferendis ipsum ex, aperiam tempore temporibus sed magni
          accusantium beatae laborum possimus! Ea, ut? Eveniet, consectetur esse
          velit enim dolorem mollitia dignissimos.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-4">
          <div>
            <p className="bg-yellow-400 rounded-2xl p-4 text-white hover:text-black">
              <FontAwesomeIcon icon={faPhone} />
              <span className="ml-4 bg-blue-gray-800 p-2 rounded-xl hover:bg-white hover:text-black">
                91XXXXXXXXX
              </span>
            </p>
          </div>
          <div>
            <p className="bg-yellow-400 rounded-2xl p-4 text-white hover:text-black">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-4 bg-blue-gray-800 p-2 rounded-xl hover:bg-white hover:text-black">
                sample@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="bg-white border-4 border-blue-300 p-4 rounded-lg w-full lg:w-1/3 mt-8 lg:mt-0">
        <div className="max-w-md mx-auto bg-blue-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            Customer Review
          </h2>

          {submitted && (
            <p className="text-green-500 text-center mb-4">
              Thank you for your message!
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="number"
              >
                Your Contact
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your number"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Review
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your review here"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                rows="5"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review_Customer;
