import React from "react";
import { Exclude, Color } from "../components/enums";
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
        const num1 = handleXdraws(num, lastResults, result.chance, 1, 20);

        const num2 = handleXdraws(num, lastResults, result.chance, 1);

        const num3 = handleXdraws(num, lastResults, result.chance, 3, 3);

        const num4 = handleXdraws(num, lastResults, result.chance, 2, 3);

        const num5 = handleXdraws(num, lastResults, result.chance, 3, 5);

        const num6 = handleXdraws(num, lastResults, result.chance, 2, 5);

        const num7 = handleXdraws(num, lastResults, result.chance, 5);

        const num8 = handleXdraws(num, lastResults, result.chance, 4);

        const num9 = handleXdraws(num, lastResults, result.chance, 3);

        const num10 = handleXdraws(num, lastResults, result.chance, 2);

        const num11 = handleXdraws(num, lastResults, 1, 100000);

        const color = num1
          ? "white"
          : num2
          ? "green"
          : num3
          ? "pink"
          : num4
          ? "skyBlue"
          : num5
          ? "darkPink"
          : num6
          ? "violet"
          : num7
          ? "black"
          : num8
          ? "gray"
          : num9
          ? "red"
          : num10
          ? "blue"
          : num11
          ? "uknown"
          : "none";
        count.push({ number: num, color: color });
      });
    });
    return count;
  };
  return {
    handleFindExclude,
  };
};
export default useFindExclude;
