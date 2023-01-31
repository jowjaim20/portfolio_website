import axios from "axios";
import React from "react";
import { Exclude, Count, ColorObject } from "../enums";
import NumWrap from "../NumWrap";
import NumWrap2 from "../NumWrap2";
import { NumWrapWrapperlastResult, NumWrapWrapperPredict } from "../Wrappers";

const PicksArr: React.FC<{
  guessArr: { guess: number[]; id: number }[];
  lastResultsPredict: Exclude[];
  excludeArr: number[];
  picks: number[];
  setPicksArr: any;
  colorObj: ColorObject[];
}> = (props) => {
  const {
    guessArr,
    excludeArr,
    lastResultsPredict,
    picks,
    setPicksArr,
    colorObj,
  } = props;

  const handleRemove = (id: number) => {
    const updateServer = async () => {
      axios.delete(`http://localhost:3500/picks/${id}`);
    };
    updateServer();

    const data = guessArr.filter((res) => id !== res.id);
    console.log(data);
    setPicksArr([...data]);
  };

  return (
    <div className=" bg-[#0D1816] p-3 flex justify-center rounded-lg h-[460px] border-[3px] border-[#7cdc01] shadow-sm shadow-[#7cdc01] w-fit">
      <div className=" grid grid-cols-6 grid-rows-6">
        {guessArr.map((arr) =>
          arr.guess.map((num) => (
            <div onClick={() => handleRemove(arr.id)}>
              <NumWrapWrapperPredict
                {...{
                  colorObj,
                  num,
                  excludeArr,
                  picks,
                  lastResultsPredict,
                  res: { chance: 2, numbers: arr.guess, id: arr.id },
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PicksArr;
