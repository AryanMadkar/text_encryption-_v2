import React from "react";
import MAinText from "../components/MAinText";
import Sidetext from "../components/Sidetext";

const Home = () => {
  return (
    <div className=" h-full min-h-[94vh] rounded-2xl w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] swim2 p-2 flex item-center justify-center gap-4">
      <div className="w-[65%] rounded-2xl flex flex-col items-center justify-center p-2 card">
        <MAinText />
      </div>
      <div className="w-[30%] rounded-2xl flex flex-col items-center justify-center p-2  card">
        <Sidetext />
      </div>
    </div>
  );
};

export default Home;
