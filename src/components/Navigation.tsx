import React from "react";
import { FaBeer, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className=" bg-blue-300 flex">
      <div className=" text-lg font-bold text-white">Logo</div>
      <div className="flex gap-1">
        <span className=" p-2 text-sm bg-lime-300 rounded-md flex justify-center items-center">
          Home
        </span>
        <span className=" p-2 text-sm bg-lime-300 rounded-md flex justify-center items-center">
          Skills
        </span>
        <span className=" p-2 text-sm bg-lime-300 rounded-md flex justify-center items-center">
          NumberGenerator
        </span>
      </div>
      <div className=" flex">
        <FaFacebook />
        <FaLinkedin />
        <FaInstagram />
      </div>
      <div>Let's Connect</div>
    </div>
  );
};

export default Navigation;
