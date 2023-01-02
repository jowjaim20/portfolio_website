import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ColorPicker from "../ColorPicker";
import { ColorObject } from "../enums";
import { ColorsCountWrapper } from "../Wrappers";

const ColorCount: React.FC<{
  colorCount: {
    number: string;
    count: number;
    desc: string;
  }[];
  colorObj: ColorObject[];
  setColorObj: React.Dispatch<React.SetStateAction<ColorObject[]>>;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;

  setColorObjId: React.Dispatch<React.SetStateAction<number>>;
}> = ({ colorCount, colorObj, setShowPicker, setColorObjId, setColorObj }) => {
  return (
    <PerfectScrollbar className=" p-2  rounded-lg grid grid-cols-5   bg-[#0D1816] border-[3px] border-[#7cdc01] shadow-sm shadow-[#7cdc01]">
      {colorCount
        .sort((a, b) => b.count - a.count)
        .map((color) => (
          <div className="flex justify-center items-center relative overflow-visible ">
            <ColorsCountWrapper
              {...{ colorObj, color, setColorObjId, setShowPicker }}
            />
            <div className="ml-2 flex flex-col p-1 w-4 h-4 justify-center items-center bg-transparent top-0 right-0 rounded-lg  font-medium text-gray-400 absolute">
              {color.desc}
            </div>
          </div>
        ))}
    </PerfectScrollbar>
  );
};

export default ColorCount;
