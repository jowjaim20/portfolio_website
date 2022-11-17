import axios from "axios";
import { format } from "date-fns";
import React from "react";
import useFindSameColor from "../../hooks/useFindSameColor";
import { date, gameName, Exclude } from "../enums";

const Header: React.FC<{
  setShowClose: React.Dispatch<React.SetStateAction<boolean>>;
  setExcludeArr: React.Dispatch<React.SetStateAction<number[]>>;
  maxNumber: number;
  lastResults: Exclude[];
  lastResultsPredict: Exclude[];
}> = ({
  setShowClose,
  maxNumber,
  lastResults,
  lastResultsPredict,
  setExcludeArr,
}) => {
  const { SameColor } = useFindSameColor();
  const handleExcludes = () => {
    setExcludeArr([]);
    SameColor(
      ["violet", "green", "pink", "darkPink", "blue", "red", "gray", "white"],
      lastResults,
      lastResultsPredict,
      setExcludeArr
    );
    SameColor(["skyBlue"], lastResults, lastResultsPredict, setExcludeArr, 2);
  };

  const updateServer = async () => {
    const getData = async (id: number | undefined, obj: Exclude) => {
      await axios.put(`http://localhost:3500/${maxNumber}/${id}`, obj);
    };
    lastResults.forEach((res) => getData(res.id, res));
  };

  return (
    <div className="flex justify-between bg-[#0D1816] border-[3px] border-[#7cdc01] shadow-sm shadow-[#7cdc01] rounded-t-xl p-5">
      <div className=" flex justify-center items-center gap-2">
        <div
          onClick={() => {
            setShowClose((prev) => !prev);
            handleExcludes();
          }}
          className=" flex justify-center items-center w-12 h-12 bg-[#7cdc01] text-[30px] font-extrabold rounded-full"
        >
          {maxNumber}
        </div>
        <div className=" text-white">{gameName[maxNumber]}</div>
      </div>
      <div
        onClick={updateServer}
        className=" text-white flex justify-center items-center"
      >
        {format(date, "MMMMMM d, yyyy")}
      </div>
    </div>
  );
};

export default Header;
