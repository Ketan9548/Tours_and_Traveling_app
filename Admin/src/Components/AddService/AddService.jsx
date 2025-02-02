import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddService = () => {
  const notify = () => toast.success("Service Add Successfully");

  // Initialize state from localStorage or with defaults
  const [title, setTitle] = useState("");
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("serviceList");
    return savedList ? JSON.parse(savedList) : [""];
  });

  // Handle title change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Handle list item change
  const handleListChange = (index, e) => {
    const newList = [...list];
    newList[index] = e.target.value;
    setList(newList);
    localStorage.setItem("serviceList", JSON.stringify(newList));
  };

  // Add a new list item
  const handleAddListItem = () => {
    const newList = [...list, ""];
    setList(newList);
    localStorage.setItem("serviceList", JSON.stringify(newList));
  };

  // Remove a list item
  const handleRemoveListItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    localStorage.setItem("serviceList", JSON.stringify(newList));
  };

  // Submit form data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newService = { title, list };
      await axios.post("/api/add", newService);
      console.log("Service added:", newService);
      setTitle("");
      setList([""]);
      localStorage.removeItem("serviceList"); // Clear localStorage after submission
    } catch (error) {
      console.error("Error adding service:", error.message);
    }
  };

  return (
    <div className="container h-full mx-auto p-4">
      <ToastContainer />
      <h1 className="text-3xl font-semibold text-center mb-6">
        Add New Service
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-semibold text-gray-700"
          >
            Service Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700">
            Service List
          </label>
          {list.map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleListChange(index, e)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Item ${index + 1}`}
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveListItem(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddListItem}
            className="text-blue-500 hover:text-blue-700 mt-2"
          >
            Add Another Item
          </button>
        </div>

        <button
          type="submit"
          onClick={() => {
            notify();
          }}
          className="w-20 h-11 hover:bg-blue-800 bg-blue-500 text-white py-2 px-3 rounded-lg transition-all ease-in-out duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddService;
