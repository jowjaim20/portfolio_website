import React from "react";
import {
  FaBeer,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
  FaRadiation,
  FaChevronUp,
  FaChevronDown,
  FaYoutube,
} from "react-icons/fa";

const Navigation: React.FC<any> = ({
  handleChangeGame,
  handleAddPicks,
  handleChancesUporDown,
  lastResults,
}) => {
  return (
    <div className=" bg-[#0D1816] flex flex-col max-h-[600px] w-40 items-center">
      <div className=" h-[100px] w-[100px] rounded-full bg-[#0D3805] flex justify-center items-center">
        <div className=" font-extrabold text-[25px] flex flex-col leading-none text-white">
          <span>Lotto</span>
          <span>Henyo</span>
        </div>
      </div>
      <div
        className=" w-10 h-10 text-white"
        onClick={() => handleChancesUporDown(lastResults, 2)}
      >
        <FaChevronUp />
      </div>
      <div className=" flex">
        <div
          className=" w-10 h-10 text-white"
          onClick={() => handleChangeGame(-1)}
        >
          <FaChevronLeft color="currentColor" />
        </div>
        <div className=" w-10 h-10 text-white" onClick={handleAddPicks}>
          <FaRadiation color="currentColor" />
        </div>
        <div
          className=" w-10 h-10 text-white "
          onClick={() => handleChangeGame(1)}
        >
          <FaChevronRight color="currentColor" />
        </div>
      </div>

      <div
        className=" w-10 h-10 text-white"
        onClick={() => handleChancesUporDown(lastResults, -2)}
      >
        <FaChevronDown />
      </div>

      <div className=" flex text-white">
        <FaFacebook color="currentColor" />
        <FaYoutube color="currentColor" />
        <FaInstagram color="currentColor" />
      </div>
      <div>Let's Connect</div>
    </div>
  );
};

export default Navigation;
