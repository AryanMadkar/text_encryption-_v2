import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../context/COntext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { authenticated, setAuthenticated } = useTheme();
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        formData
      ); // Include formData in the request
      const data = response.data;
      setUserdata(data); // Set userdata instead of formData
      setAuthenticated(true);
      navigate("/");
      toast.success("Login successful!"); // Display success toast notification when login is successful
    } catch (error) {
      toast.error("Invalid email or password!"); // Display error toast notification when login fails
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="h-full min-h-[94vh] rounded-2xl w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] swim3 p-2 flex items-center justify-center gap-4">
      <div className="w-full flex items-center mt-[3rem] flex-col justify-center gap-3 h-fit max-w-md p-8 space-y-6 card rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email} // Updated to use formData.email
              onChange={handleChange}
              required
              className="w-[30vw] p-2 mt-1 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
          <Link to="/register" className="hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
