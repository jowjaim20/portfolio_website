import React from "react";
import useFindExclude from "./useFindExclude";
import { Exclude, Color, ColorObject } from "../components/enums";
const useFindSameColor = (colorObj: ColorObject[]) => {
  const { handleFindExclude } = useFindExclude(colorObj);

  const handleSameColor2 = (
    color: string,
    lastResults: Exclude[],
    lastResultsPredict: Exclude[],
    setExcludeArr: React.Dispatch<React.SetStateAction<number[]>>,
    frequency: number = 1
  ) => {
    const lastResultsColors = handleFindExclude(lastResults);
    const allNumbersColors = handleFindExclude(lastResultsPredict, 2).filter(
      (num) => num.color === color
    );

    const filtered = allNumbersColors.filter((numObj) => {
      const obj = lastResultsColors
        .filter((numObj2) => numObj2.number === numObj.number)
        .filter((numOBJ3) => numOBJ3.color === numObj.color);

      return obj.length >= frequency ? true : false;
    });
    const excludeArr = filtered.map((obj) => obj.number);

    setExcludeArr((prev) => [...prev, ...excludeArr]);
  };

  const SameColor = (
    color: string[],
    lastResults: Exclude[],
    lastResultsPredict: Exclude[],
    setExcludeArr: React.Dispatch<React.SetStateAction<number[]>>,
    frequency: number = 1
  ) => {
    color.forEach((color) =>
      handleSameColor2(
        color,
        lastResults,
        lastResultsPredict,
        setExcludeArr,
        frequency
      )
    );
  };

  return {
    SameColor,
  };
};

export default useFindSameColor;
