import React from "react";
import Docks1 from "../components/Dockstext/Docks1";
import Docks2 from "../components/Dockstext/Docks2";
import Docks3 from "../components/Dockstext/Docks3";
import DOcks4 from "../components/Dockstext/DOcks4";
import Docks5 from "../components/Dockstext/Docks5";
import Docks6 from "../components/Dockstext/Docks6";
import Docks8 from "../components/Dockstext/Docks8";
import { useTheme } from "../context/COntext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Docks = () => {
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
  return (
    <div className=" h-full min-h-[94vh] font-semibold rounded-2xl  text-white flex-col w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  p-10 flex item-center justify-start  gap-10">
      <h1 className="flex items-center  mt-2 text-3xl justify-center">
        Complete Guide to Text Encryption
      </h1>
      <Docks1 />
      <Docks2 />
      <Docks3 />
      <DOcks4 />
      <Docks5 />
      <Docks6 />
      <Docks8 />
    </div>
  );
};

export default Docks;
