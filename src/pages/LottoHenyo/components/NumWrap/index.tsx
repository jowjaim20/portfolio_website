import React from "react";

const NumWrap: React.FC<{
  num: number;
  include?: boolean;
  includeAll?: boolean;
  single?: boolean;
  twice?: boolean;
  twice5Draws?: boolean;
  twice3Draws?: boolean;
  trice?: boolean;
  trice5Draws?: boolean;
  trice3Draws?: boolean;
  fourTimes?: boolean;
  fiveTimes?: boolean;
  onClick?: () => void;
  clicked?: number;
  once20Draw?: boolean;
  once10Draw?: boolean;
  excludeArr?: number[];
  picks?: number[];
  handlesetColorCount?: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({
  picks,
  num,
  include = true,
  includeAll = false,
  trice3Draws = false,
  twice3Draws = false,
  trice5Draws = false,
  twice5Draws = false,
  single = false,
  twice = false,
  trice = false,
  fourTimes = false,
  fiveTimes = false,
  once20Draw = false,
  once10Draw = false,
  clicked = 0,
  excludeArr,
}) => {
  const included = picks?.includes(num);
  const excluded = excludeArr?.includes(num);

  return (
    <div
      className={`${
        excluded && included
          ? " outline-dashed outline-[6px] border-[6px] border-orange-500 outline-orange-500"
          : excluded
          ? " text-black text-[30px] outline-[6px] outline-dashed outline-pink-400"
          : included
          ? "text-gray-900 border-[6px] border-orange-500 text-[25px] font-extrabold"
          : ""
      }${
        clicked === num
          ? " text-red-400 border-2 border-[#0D1816] text-[30px] font-extrabold"
          : " text-gray-700 "
      }
       flex justify-center items-center text-lg font-bold rounded-full shadow-inner shadow-gray-900 ${
         once20Draw
           ? " bg-white"
           : once10Draw
           ? " bg-[#53ff7e]"
           : trice3Draws
           ? " bg-rose-200"
           : twice3Draws
           ? "bg-[#00E3FF]"
           : trice5Draws
           ? " bg-[#ff57e2]"
           : twice5Draws
           ? " bg-[#a99eff]"
           : fiveTimes
           ? "bg-black"
           : fourTimes
           ? " bg-gray-400"
           : trice
           ? " bg-[#ff0000]"
           : twice
           ? " bg-[#4d88ff]"
           : single
           ? " border-2 border-slate-50"
           : includeAll
           ? " bg-yellow-900"
           : include
           ? " bg-pink-500"
           : " bg-purple-900"
       } w-11 h-11 p-2`}
    >
      {num}
    </div>
  );
};

export default NumWrap;
