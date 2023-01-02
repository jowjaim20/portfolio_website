import React from "react";
import useHandleXDraws from "../../hooks/useHandleXDraws";
import NumWrap from "../NumWrap";
import { ColorObject, Exclude } from "../enums";

export const NumWrapWrapperPredict: React.FC<{
  num: number;
  excludeArr: number[];
  picks: number[];
  lastResultsPredict: Exclude[];
  res: Exclude;
  colorObj: ColorObject[];
}> = ({ num, excludeArr, picks, lastResultsPredict, res, colorObj }) => {
  const { handleXdraws } = useHandleXDraws();

  let props: { bg: ColorObject[] } = { bg: [] };
  colorObj.forEach((obj) => {
    if (
      handleXdraws(num, lastResultsPredict, res.chance, obj.count, obj.draws)
    ) {
      props.bg.push(obj);
    }
  });

  return (
    <NumWrap
      colorObj={colorObj}
      excludeArr={excludeArr}
      picks={picks}
      num={num}
      {...props}
    />
  );
};

export const NumWrapWrapperlastResult: React.FC<{
  clicked: number;
  num: number;
  lastResults: Exclude[];
  res: Exclude;
  colorObj: ColorObject[];
}> = ({ clicked, num, lastResults, res, colorObj }) => {
  const { handleXdraws } = useHandleXDraws();

  let props: { bg: ColorObject[] } = { bg: [] };
  colorObj.forEach((obj) => {
    if (handleXdraws(num, lastResults, res.chance, obj.count, obj.draws)) {
      props.bg.push(obj);
    }
  });

  return <NumWrap colorObj={colorObj} clicked={clicked} num={num} {...props} />;
};

export const ColorsCountWrapper: React.FC<{
  color: {
    number: string;
    count: number;
    desc: string;
  };
  colorObj: ColorObject[];
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
  setColorObjId: React.Dispatch<React.SetStateAction<number>>;
}> = ({ color, colorObj, setColorObjId, setShowPicker }) => {
  let props: { bg: ColorObject[] } = { bg: [] };
  colorObj.forEach((obj) => {
    if (color.number === obj.color) {
      props.bg.push(obj);
    }
  });

  const handleColorChange = () => {
    setShowPicker((val) => !val);
    setColorObjId(props.bg[0].id);
  };
  return (
    <div onClick={handleColorChange}>
      <NumWrap colorObj={colorObj} num={color.count} {...props} />
    </div>
  );
};
