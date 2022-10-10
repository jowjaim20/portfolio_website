import React from "react";
import { FaBeer, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className=" flex">
      <div>Logo</div>
      <div className="flex">
        <span>Home</span>
        <span>Skills</span>
        <span>Projects</span>
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
