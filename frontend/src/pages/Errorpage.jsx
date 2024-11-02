import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cylindricaltext from "../components/Cylindricaltext";
const Errorpage = () => {
  return (
    <div className="text-white min-h-[100vh] purp w-full p-6 overflow-hidden flex items-center justify-center gap-2 flex-row">
      <div className="flex flex-col gap-[2rem] font-semibold items-start justify-around h-full w-1/2">
        <h4 className="text-[1rem]">Word Code</h4>
        <h1 className="text-[5rem]">Hide & Seek Time!</h1>
        <h1 className="text-[2rem]">
          And you're it! <br />
          (Sorry, we can't find the page, too.)
        </h1>
      </div>
      <div className="flex flex-col gap-[2rem] items-center justify-around h-full w-1/2">
        <Cylindricaltext />
        <Link
          to={"/"}
          className="border-2 text-lg font-semibold p-2 rounded-xl"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
