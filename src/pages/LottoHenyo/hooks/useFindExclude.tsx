import React from "react";
import { Exclude, Color, colorObj } from "../components/enums";
import useHandleXDraws from "./useHandleXDraws";

const useFindExclude = () => {
  const { handleXdraws } = useHandleXDraws();

  const handleFindExclude = (lastResults: Exclude[], option: 1 | 2 = 1) => {
    const count: Color[] = [];
    const filtered1 = lastResults.filter(
      (result) => result.chance >= 4 && result.chance <= 42
    );
    const filtered2 = lastResults.filter((result) => result.chance === 2);
    const result = option === 1 ? filtered1 : filtered2;

    result.forEach((result) => {
      result.numbers.forEach((num) => {
        const color = colorObj.find((obj) =>
          handleXdraws(num, lastResults, result.chance, obj.count, obj.draws)
        );

        count.push({
          number: num,
          color: color?.color ? color?.color : "none",
        });
      });
    });
    return count;
  };
  return {
    handleFindExclude,
  };
};
export default useFindExclude;
