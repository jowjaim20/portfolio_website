import { ExpenseType,  } from "pages/HomePage/enums";
import React from "react";

const ExpenseCard: React.FC<ExpenseType> = (props) => {
  const { amount, frequency, title } = props;
  return (
    <div>
      <div className="flex">
        <div>{title}</div>
        <div>{amount}</div>
        <div>{frequency}</div>
      </div>
    </div>
  );
};

export default ExpenseCard;
