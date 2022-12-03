import React, { useState } from "react";
import { ExpenseType } from "pages/HomePage/enums";
import ExpenseCard from "../ExpenseCard";

const data: ExpenseType[] = [
  { amount: 10, frequency: "daily", id: 1, title: "test" },
  { amount: 10, frequency: "daily", id: 2, title: "test" },
];

const AllExpenses = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseCard {...{ ...expense }} />
      ))}
    </div>
  );
};

export default AllExpenses;
