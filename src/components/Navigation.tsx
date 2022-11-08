import React from "react";
import {
  FaBeer,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Navigation: React.FC<any> = ({ handleChangeGame }) => {
  return (
    <div className=" bg-[#0D1816] flex flex-col h-full mb-12 w-40 items-center">
      <div className=" h-[100px] w-[100px] rounded-full bg-[#0D3805] flex justify-center items-center">
        <div className=" font-extrabold text-[25px] flex flex-col leading-none text-white">
          <span>Lotto</span>
          <span>Henyo</span>
        </div>
        <div className=" w-10 h-10" onClick={() => handleChangeGame(-1)}>
          <FaChevronLeft />
        </div>
        <div className=" w-10 h-10" onClick={() => handleChangeGame(1)}>
          <FaChevronRight />
        </div>
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
