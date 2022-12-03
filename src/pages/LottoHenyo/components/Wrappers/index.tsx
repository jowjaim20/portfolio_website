import React from "react";
import useHandleXDraws from "../../hooks/useHandleXDraws";
import NumWrap from "../NumWrap";
import { colorObj, ColorObject, Exclude } from "../enums";

export const NumWrapWrapperPredict: React.FC<{
  num: number;
  excludeArr: number[];
  picks: number[];
  lastResultsPredict: Exclude[];
  res: Exclude;
}> = ({ num, excludeArr, picks, lastResultsPredict, res }) => {
  const { handleXdraws } = useHandleXDraws();

  let props: { bg: ColorObject[] } = { bg: [] };
  colorObj.forEach((obj) => {
    if (
      handleXdraws(num, lastResultsPredict, res.chance, obj.count, obj.draws)
    ) {
      props.bg.push(obj);
    }
  });

  return <NumWrap excludeArr={excludeArr} picks={picks} num={num} {...props} />;
};

export const NumWrapWrapperlastResult: React.FC<{
  clicked: number;
  num: number;
  lastResults: Exclude[];
  res: Exclude;
}> = ({ clicked, num, lastResults, res }) => {
  const { handleXdraws } = useHandleXDraws();

  let props: { bg: ColorObject[] } = { bg: [] };
  colorObj.forEach((obj) => {
    if (handleXdraws(num, lastResults, res.chance, obj.count, obj.draws)) {
      props.bg.push(obj);
    }
  });

  return <NumWrap clicked={clicked} num={num} {...props} />;
};

export const ColorsCountWrapper: React.FC<{
  color: {
    number: string;
    count: number;
    desc: string;
  };
}> = ({ color }) => {
  let props: { bg: ColorObject[] } = { bg: [] };
  colorObj.forEach((obj) => {
    if (color.number === obj.color) {
      props.bg.push(obj);
    }
  });
  return <NumWrap num={color.count} {...props} />;
};
