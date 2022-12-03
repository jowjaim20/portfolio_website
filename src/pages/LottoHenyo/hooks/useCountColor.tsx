import React from "react";
import useHandleXDraws from "./useHandleXDraws";
import { Exclude, colorObj, Desc } from "../components/enums";
const useCountColor = () => {
  const { handleXdraws } = useHandleXDraws();
  const handlesetColorCount = (
    lastResults: Exclude[],
    setColorCount: React.Dispatch<React.SetStateAction<Desc[]>>
  ) => {
    const count: string[] = [];
    lastResults
      .filter((a, b) => a.chance <= 42)
      .forEach((result) => {
        result.numbers.forEach((num) => {
          const color = colorObj.find((obj) =>
            handleXdraws(num, lastResults, result.chance, obj.count, obj.draws)
          );

          count.push(color?.color ? color?.color : "none");
        });
      });
    const counter = (count: string[]) => {
      const data = colorObj.map((d) => {
        const length = count.filter((e) => e === d.color);

        return {
          number: d.color,
          desc: `${d.count}/${d.draws}`,
          count: length.length,
        };
      });
      setColorCount(data);
    };
    counter(count);
  };

  return { handlesetColorCount };
};

export default useCountColor;
