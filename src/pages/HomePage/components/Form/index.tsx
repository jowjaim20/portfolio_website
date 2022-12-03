import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "components/InputForm";
import {  Input } from "../../enums";

const CalcForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: "45",
      test: "t3st",
    },
  });
  const data: Record<"number" | "test", Input> = {
    number: {
      name: "number",
      errors,
      input: { ...register("number", { required: "required" }) },
    },
    test: {
      name: "test",
      errors,
      input: { ...register("test", { required: "required" }) },
    },
  };

  const submit = (params: any) => {
    console.log(params);
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
      <input />
      <InputForm {...data.number} />
      <InputForm {...data.test} />
      <button type="submit">submit</button>/
    </form>
  );
};

export default CalcForm;
