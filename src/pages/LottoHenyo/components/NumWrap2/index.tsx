import React from "react";

const NumWrap2: React.FC<{
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
  picks?: number[];
}> = ({
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
}) => {
  return (
    <div
      className={` absolute z-30 -top-1 -right-1${
        clicked === num
          ? " text-fuchsia-900 border-2 border-black text-[25px] font-extrabold"
          : " text-white "
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
       } w-3 h-3 p-2`}
    >
      {num}
    </div>
  );
};

export default NumWrap2;
