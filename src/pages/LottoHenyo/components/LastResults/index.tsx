import React from "react";
import { ColorObject, Exclude } from "../enums";
import { NumWrapWrapperlastResult } from "../Wrappers";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import axios from "axios";

const LastResults: React.FC<{
  maxNumber: number;
  lastResults: Exclude[];
  setClicked: React.Dispatch<React.SetStateAction<number>>;
  setPicks: React.Dispatch<React.SetStateAction<number[]>>;
  clicked: number;
  showClose: boolean;
  setlastResults: React.Dispatch<React.SetStateAction<Exclude[]>>;
  colorObj: ColorObject[];
}> = ({
  setlastResults,
  lastResults,
  setClicked,
  clicked,
  showClose,
  setPicks,
  maxNumber,
  colorObj,
}) => {
  const handleRemove = (chance: number, id: number | undefined) => {
    const updateServer = async () => {
      axios.delete(`http://localhost:3500/${maxNumber}/${id}`);
    };
    updateServer();

    const data = lastResults.filter((res) => chance !== res.chance);
    setlastResults([...data]);
  };

  const handleSetPicks = (numbers: number[]) => {
    setPicks(numbers);
  };
  const handleCountCOmb = (comb: string = "0", lastresult: Exclude[]) => {
    const newArr = lastResults.filter((res) => res.comb === comb);
    return newArr.length >= 2;
  };

  return (
    <div className=" p-2 bg-transparent border-2 w-fit border-green-900 rounded-lg flex flex-col h-[460px]">
      <PerfectScrollbar className="  max-h-full flex flex-col  items-center">
        {lastResults
          .sort((a, b) => a.chance - b.chance)
          .filter((res) => res.numbers.length === 6)
          .map((res) => (
            <div className={`flex ${res.chance > 60 ? "bg-black" : ""}`}>
              {res.numbers.map((num) => (
                <div
                  onClick={() => {
                    setClicked(num);
                  }}
                >
                  <NumWrapWrapperlastResult
                    {...{ clicked, lastResults, num, res, colorObj }}
                  />
                </div>
              ))}
              <div
                className={`  flex justify-center items-center rounded-full text-white w-fit`}
              >
                <div
                  onClick={() => handleSetPicks(res.numbers)}
                  className={` flex justify-center items-center w-10 h-10 rounded-md ${
                    handleCountCOmb(res?.comb, lastResults)
                      ? "bg-slate-600"
                      : res.chance === 2
                      ? " bg-green-900"
                      : "bg-orange-400"
                  } `}
                >
                  {res.chance}
                </div>
                {/* <div className="text-gray-500">{res.comb}</div> */}
                <button
                  className={`${
                    showClose ? "" : "hidden"
                  } bg-red-600 flex justify-center items-center w-10 h-10 rounded-full text-white`}
                  onClick={() => handleRemove(res.chance, res.id)}
                >
                  x
                </button>
              </div>
            </div>
          ))}
      </PerfectScrollbar>
    </div>
  );
};

export default LastResults;
