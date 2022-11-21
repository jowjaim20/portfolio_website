import React from "react";
import { Exclude } from "../components/enums";
const useHandleXDraws = () => {
  const handleXdraws = (
    nums: number,
    lastResults: Exclude[],
    chance: number = 0,
    frequency: number = 2,
    chanceAdd: number = 10
  ) => {
    const data = lastResults.filter(
      (res) =>
        res.chance >= chance && res.chance <= chance + (chanceAdd *2 -2)
    );
    const count = data
      .map((data) => data.numbers.filter((num) => num === nums))
      .flat().length;

    return count === frequency;
  };

  return {
    handleXdraws,
  };
};

export default useHandleXDraws;
