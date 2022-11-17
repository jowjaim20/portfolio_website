import React from "react";
import useHandleXDraws from "../../hooks/useHandleXDraws";
import NumWrap from "../NumWrap";
import { Exclude } from "../enums";

export const NumWrapWrapperPredict: React.FC<{
  num: number;
  excludeArr: number[];
  picks: number[];
  lastResultsPredict: Exclude[];
  res: Exclude;
}> = ({ num, excludeArr, picks, lastResultsPredict, res }) => {
  const { handleXdraws } = useHandleXDraws();
  return (
    <NumWrap
      excludeArr={excludeArr}
      picks={picks}
      num={num}
      single={handleXdraws(num, lastResultsPredict, res.chance, 1, 10000)}
      twice={handleXdraws(num, lastResultsPredict, res.chance, 2)}
      trice={handleXdraws(num, lastResultsPredict, res.chance, 3)}
      twice5Draws={handleXdraws(num, lastResultsPredict, res.chance, 2, 5)}
      trice5Draws={handleXdraws(num, lastResultsPredict, res.chance, 3, 5)}
      twice3Draws={handleXdraws(num, lastResultsPredict, res.chance, 2, 3)}
      trice3Draws={handleXdraws(num, lastResultsPredict, res.chance, 3, 3)}
      fourTimes={handleXdraws(num, lastResultsPredict, res.chance, 4)}
      fiveTimes={handleXdraws(num, lastResultsPredict, res.chance, 5)}
      once20Draw={handleXdraws(num, lastResultsPredict, res.chance, 1, 20)}
      once10Draw={handleXdraws(num, lastResultsPredict, res.chance, 1)}
    />
  );
};

export const NumWrapWrapperlastResult: React.FC<{
  clicked: number;
  num: number;
  lastResults: Exclude[];
  res: Exclude;
}> = ({ clicked, num, lastResults, res }) => {
  const { handleXdraws } = useHandleXDraws();
  return (
    <NumWrap
      clicked={clicked}
      num={num}
      single={handleXdraws(num, lastResults, res.chance, 1, 10000)}
      twice={handleXdraws(num, lastResults, res.chance, 2)}
      trice={handleXdraws(num, lastResults, res.chance, 3)}
      twice5Draws={handleXdraws(num, lastResults, res.chance, 2, 5)}
      trice5Draws={handleXdraws(num, lastResults, res.chance, 3, 5)}
      twice3Draws={handleXdraws(num, lastResults, res.chance, 2, 3)}
      trice3Draws={handleXdraws(num, lastResults, res.chance, 3, 3)}
      fourTimes={handleXdraws(num, lastResults, res.chance, 4)}
      fiveTimes={handleXdraws(num, lastResults, res.chance, 5)}
      once20Draw={handleXdraws(num, lastResults, res.chance, 1, 20)}
      once10Draw={handleXdraws(num, lastResults, res.chance, 1)}
    />
  );
};

export const ColorsCountWrapper: React.FC<{
  color: {
    number: string;
    count: number;
    desc: string;
  };
}> = ({ color }) => {
  return (
    <NumWrap
      num={color.count}
      twice={color.number === "blue"}
      trice={color.number === "red"}
      twice5Draws={color.number === "violet"}
      trice5Draws={color.number === "darkPink"}
      twice3Draws={color.number === "skyBlue"}
      trice3Draws={color.number === "pink"}
      fourTimes={color.number === "gray"}
      fiveTimes={color.number === "black"}
      once20Draw={color.number === "white"}
      once10Draw={color.number === "green"}
    />
  );
};
