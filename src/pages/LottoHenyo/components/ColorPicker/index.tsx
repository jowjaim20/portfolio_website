import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { ColorObject } from "../enums";

const ColorPicker: React.FC<{
  colorObj: ColorObject[];
  setColorObj: React.Dispatch<React.SetStateAction<ColorObject[]>>;
  id: number;
}> = ({ colorObj, setColorObj, id }) => {
  const [color, setColor] = useState("#fff");
  useEffect(() => {
    const hex = colorObj.find((o) => o.id === id)?.hex
      ? colorObj.find((o) => o.id === id)?.hex
      : "#fff";

    setColor(hex ? hex : "#fff");
  }, []);

  const handleChangeColor = () => {
    const updateServer = async (data: any) => {
      axios.put(`http://localhost:3500/colorObj/${id}`, data);
    };
    const newCobj = colorObj.map((obj) => {
      if (obj.id === id) {
        const newCobj = { ...obj, hex: color };
        updateServer(newCobj);
        return newCobj;
      }
      return obj;
    });
    setColorObj(newCobj);
  };
  return (
    <div>
      <ChromePicker
        disableAlpha
        color={color}
        onChange={(e) => setColor(e.hex)}
      />
      <button onClick={handleChangeColor}>Change</button>
    </div>
  );
};

export default ColorPicker;
