import React from "react";
import { Exclude, Count, ColorObject } from "../enums";
import NumWrap2 from "../NumWrap2";
import { NumWrapWrapperPredict } from "../Wrappers";

const LastResultsPredict: React.FC<{
  lastResultsPredict: Exclude[];
  setClicked: React.Dispatch<React.SetStateAction<number>>;
  excludeArr: number[];
  setPicks: React.Dispatch<React.SetStateAction<number[]>>;
  setlastResultsPredict: React.Dispatch<React.SetStateAction<Exclude[]>>;
  picks: number[];
  count: Count[];
  colorObj: ColorObject[];
}> = ({
  lastResultsPredict,
  setClicked,
  excludeArr,
  setPicks,
  setlastResultsPredict,
  picks,
  count,
  colorObj,
}) => {
  const handlePicks = (num: number) => {
    setPicks((data) => {
      const bool = data.includes(num);
      if (!bool && data.length <= 5) {
        return [...data, num];
      } else {
        const filtered = data.filter((number) => number !== num);
        return [...filtered];
      }
    });
  };
  return (
    <div className=" bg-[#0D1816] p-3 flex justify-center rounded-lg h-[460px] border-[3px] border-[#7cdc01] shadow-sm shadow-[#7cdc01] w-fit">
      {lastResultsPredict
        .sort((a, b) => a.chance - b.chance)
        .filter((res) => res.numbers.length > 6)
        .map((res) => (
          <div className="grid grid-cols-6">
            {res.numbers.map((num) => (
              <div
                className="relative z-0"
                onClick={() => {
                  setClicked(num);
                  handlePicks(num);
                }}
              >
                <NumWrapWrapperPredict
                  {...{
                    num,
                    excludeArr,
                    picks,
                    lastResultsPredict,
                    res,
                    colorObj,
                  }}
                />
                {count.map(
                  (obj) =>
                    obj.num === num && (
                      <div className="flex">
                        <NumWrap2 num={obj.count} once10Draw />
                      </div>
                    )
                )}
              </div>
            ))}
            <div className="flex justify-center items-center w-10 h-10 rounded-md bg-orange-400">
              {res.chance}
            </div>
            <button
              className={`${
                lastResultsPredict.length <= 30 ? "hidden" : ""
              } bg-red-600 flex justify-center items-center w-10 h-10 rounded-full text-white`}
              onClick={() => setlastResultsPredict([])}
            >
              x
            </button>
          </div>
        ))}
    </div>
  );
};

export default LastResultsPredict;
