import React from "react";
import useHandleXDraws from "./useHandleXDraws";
import { Exclude, colorsCount } from "../components/enums";
const useCountColor = () => {
  const { handleXdraws } = useHandleXDraws();
  const handlesetColorCount = (
    lastResults: Exclude[],
    setColorCount: React.Dispatch<
      React.SetStateAction<
        {
          number: string;
          count: number;
          desc: string;
        }[]
      >
    >
  ) => {
    const count: string[] = [];
    lastResults
      .filter((a, b) => a.chance <= 22)
      .forEach((result) => {
        result.numbers.forEach((num) => {
          const num1 = handleXdraws(num, lastResults, result.chance, 1, 38);

          const num2 = handleXdraws(num, lastResults, result.chance, 1);

          const num3 = handleXdraws(num, lastResults, result.chance, 3, 3);

          const num4 = handleXdraws(num, lastResults, result.chance, 2, 3);

          const num5 = handleXdraws(num, lastResults, result.chance, 3, 5);

          const num6 = handleXdraws(num, lastResults, result.chance, 2, 5);

          const num7 = handleXdraws(num, lastResults, result.chance, 5);

          const num8 = handleXdraws(num, lastResults, result.chance, 4);

          const num9 = handleXdraws(num, lastResults, result.chance, 3);

          const num10 = handleXdraws(num, lastResults, result.chance, 2);

          const num11 = handleXdraws(num, lastResults, 1, 10000);

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

          count.push(color);
        });
      });
    const counter = (count: string[]) => {
      const data = colorsCount.map((d) => {
        const length = count.filter((e) => e === d.number);

        return { ...d, count: length.length };
      });
      setColorCount(data);
    };
    counter(count);
  };

  return { handlesetColorCount };
};

export default useCountColor;
