import React from "react";
import { useTheme } from "../context/COntext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashbord = () => {
  const { authenticated, setAuthenticated } = useTheme();
  if (!authenticated) {
    toast.error("You must be logged in to access this page!");
    return (
      <div className="h-full min-h-[94vh] font-semibold rounded-2xl  text-white flex-col w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  p-10 flex item-center justify-start  gap-10">
        {" "}
        You have to register first
      </div>
    );
  }
  return <div>Dashbord</div>;
};

export default Dashbord;
