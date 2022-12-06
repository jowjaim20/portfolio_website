import React from "react";
import { colorObj, ColorObject } from "../enums";

const NumWrap: React.FC<{
  num: number;
  clicked?: number;
  excludeArr?: number[];
  bg?: ColorObject[];
  picks?: number[];
  handlesetColorCount?: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ picks, num, clicked = 0, excludeArr, bg = [] }) => {
  const included = picks?.includes(num);
  const excluded = excludeArr?.includes(num);

  const iColorHitStyle = () => {
    return excluded && included
      ? " outline-dashed outline-[6px] border-[6px] border-orange-500 outline-orange-500"
      : excluded
      ? " text-black text-[30px] outline-[6px] outline-dashed outline-pink-400"
      : included
      ? "text-gray-900 border-[6px] border-orange-500 text-[25px] font-extrabold"
      : "";
  };

  const isClickedStyle = () => {
    return clicked === num
      ? " text-red-400 border-2 border-[#0D1816] text-[30px] font-extrabold"
      : " text-gray-700 ";
  };

  return (
    <div
      className={`${iColorHitStyle()}${isClickedStyle()} 
       flex justify-center items-center text-lg font-bold rounded-full shadow-inner shadow-gray-900 w-11 h-11 p-2`}
      style={{ backgroundColor: bg[0]?.hex ? bg[0]?.hex : "#ff00ff" }}
    >
      {num}
    </div>
  );
};

export default NumWrap;
