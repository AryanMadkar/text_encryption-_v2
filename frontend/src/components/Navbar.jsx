import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/COntext";

const Navbar = () => {
  const { authenticated, setAuthenticated } = useTheme();

  return (
    <div className=" flex items-center justify-between p-3 min-h-[4rem] text-white w-full bg-black shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-3xl m-2">
      <h1 className="text-5xl w-full font-bold">₩ØⱤĐ ₵ØĐɆ</h1>
      <div className="w-full flex items-center justify-center gap-6">
        <ul className="flex items-center justify-between gap-2 font-bold text-xl">
          <li>
            <Link
              className="border-2 p-2 rounded-2xl  hover:bg-white hover:text-black transition-all ease-in duration-200 border-white "
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="border-2 p-2 rounded-2xl  hover:bg-white hover:text-black transition-all ease-in duration-200 border-white "
              to="/user"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              className="border-2 p-2 rounded-2xl  hover:bg-white hover:text-black transition-all ease-in duration-200 border-white "
              to="/dashbord"
            >
              Dashbord
            </Link>
          </li>
          <li>
            <Link
              className="border-2 p-2 rounded-2xl  hover:bg-white hover:text-black transition-all ease-in duration-200 border-white "
              to="/dock"
            >
              Docks
            </Link>
          </li>
        </ul>
      </div>
      {authenticated ? (
        <div className="w-full flex items-center font-bold text-xl justify-end gap-4">
          <button
            onClick={() => setAuthenticated(false)}
            className="border-2 p-2 rounded-2xl  hover:bg-white hover:text-black transition-all ease-in duration-200 border-white "
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="w-full flex items-center font-bold text-xl justify-end gap-4">
          <Link
            className="border-2 p-2 rounded-2xl  hover:bg-white hover:text-black transition-all ease-in duration-200 border-white "
            to="/login"
          >
            Login
          </Link>
          <Link
            className=" border-2 p-2 rounded-2xl  hover:bg-white hover:text-black transition-all ease-in duration-200 border-white "
            to="/register"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
