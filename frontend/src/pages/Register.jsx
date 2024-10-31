import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../context/COntext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [userregdata, setUserregdata] = useState(null);
  const { authenticated, setAuthenticated } = useTheme();
  const [formData, setFormData] = useState({
    username: "",
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      const respose = await axios.post("http://localhost:5000/user/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setAuthenticated(true);
      navigate("/");
      setUserregdata(respose.data);

      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Registration failed!");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className=" h-full min-h-[94vh] rounded-2xl w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] swim3 p-2 flex item-center justify-center gap-4">
      <div className="w-full max-w-md p-8 space-y-6 card h-fit rounded shadow-md mt-[3rem]">
        <h2 className="text-2xl font-bold text-center text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-2 font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-sm text-center text-gray-600">
          <Link to="/login" className="hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
