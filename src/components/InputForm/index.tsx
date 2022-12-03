import React, { useState } from "react";
import { Input } from "../../pages/HomePage/enums";

const InputForm: React.FC<Input> = (props) => {
  const { title, input, placeholder, errors, name } = props;
  return (
    <div className="flex flex-col h-16">
      <h3>{title}</h3>
      <div
        className={`border ${
          errors[name] ? "border-amber-600" : "border-gray-300 active:border-none"
        } flex flex-col`}
      >
        <input {...input} {...{ placeholder }} />
      </div>
      <div
        className={`${errors[name] ? "" : "hidden"} text-[10px] text-red-500`}
      >
        {errors[name]?.message}
      </div>
    </div>
  );
};

export default InputForm;
