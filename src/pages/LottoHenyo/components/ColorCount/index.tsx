import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ColorsCountWrapper } from "../Wrappers";

const ColorCount: React.FC<{
  colorCount: {
    number: string;
    count: number;
    desc: string;
  }[];
}> = ({ colorCount }) => {
  return (
    <PerfectScrollbar className=" p-2  rounded-lg flex flex-col    bg-[#0D1816] border-[3px] border-[#7cdc01] shadow-sm shadow-[#7cdc01]">
      {colorCount
        .sort((a, b) => b.count - a.count)
        .map((color) => (
          <div className="flex justify-center items-center">
            <ColorsCountWrapper color={color} />
            <div className="ml-2 flex flex-col p-1 w-10 h-10 justify-center items-center bg-white rounded-lg  font-medium text-black">
              {color.desc}
            </div>
          </div>
        ))}
    </PerfectScrollbar>
  );
};

export default ColorCount;
