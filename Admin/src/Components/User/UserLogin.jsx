import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/addservice");
    }
  }, [navigate]);

  const notify = () => toast.success("Logged in successfully.....");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const val = { email: email, password: password };
      const response = await axios.post("api/login", val);
      localStorage.setItem("token", response.data.token);
      notify();
      navigate("/addservice");
    } catch (error) {
      toast.error("Invalid User Credentials");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-yellow-600 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
          <div className="p-7 border-2 border-white rounded-2xl bg-blue-400">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-black"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-black font-bold hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </form>
          </div>
          <p className="text-sm text-gray-600 text-center mt-6">
            Don't have an account?
            <NavLink
              to="/registration"
              className="text-blue-600 hover:underline"
            >
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
