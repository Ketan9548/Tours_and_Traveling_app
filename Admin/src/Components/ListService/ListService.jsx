import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ListService = () => {
  const notify = () => toast.error("Service Delete Successfully");

  const [service, setService] = useState([]);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/alldata");
      setService(res.data);
      console.log("Service data fetched:", res.data);
    } catch (err) {
      console.error("Error fetching service data:", err.message);
    }
  };

  // Delete data by ID and update frontend
  const deleteData = async (id) => {
    try {
      await axios.delete(`/api/delete/${id}`);
      console.log(`Data with ID ${id} deleted.`);
      setService((prevService) => prevService.filter((item) => item.id !== id));
      notify();
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

  // Initial fetch when component loads
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-3xl font-semibold text-center mb-6">
        List of Services
      </h1>
      {service.length === 0 ? (
        <p className="text-center text-gray-500">No services available.</p>
      ) : (
        service.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <div className="flex-1 mb-4 md:mb-0">
              <p className="text-xl font-semibold text-gray-800">
                {item.title}
              </p>
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              {item.list?.length > 0 ? (
                item.list.map((listItem, index) => (
                  <p key={index} className="mb-2 text-sm text-gray-600">
                    {listItem}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-500">No items in the list.</p>
              )}
            </div>
            <div>
              <button
                onClick={() => deleteData(item.id)}
                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-all ease-in-out duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListService;
