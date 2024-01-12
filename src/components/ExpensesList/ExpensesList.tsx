import Card from "../Card/Card";
import { Expense } from "../../util/types";
import React from "react";

const ExpensesList = () => {
  // const DUMMY_LIST: Expense[] | [] = [];

  const DUMMY_LIST: Expense[] | [] = [
    {
      amount: 100,
      date: new Date(),
      id: "1",
      description: "First test ever!",
      category: "Water",
    },
    {
      amount: 240,
      category: "Internet",
      date: new Date(new Date().getDate() - 1),
      description: "Second test like always!",
      id: "2",
    },
    {
      amount: 750,
      category: "House",
      date: new Date(new Date().getDate() - 3),
      description: "Third test like my future life!",
      id: "3",
    },
    {
      amount: 620,
      category: "Car",
      date: new Date(new Date().getDate() - 2),
      description: "Forth test like my future life!",
      id: "4",
    },
    {
      amount: 500,
      category: "Debts",
      date: new Date(new Date().getDate() - 7),
      description: "Fifth test like my future life!",
      id: "5",
    },
    {
      amount: 40,
      category: "Gas",
      date: new Date(new Date().getDate() - 6),
      description: "Six test like my future life!",
      id: "6",
    },
  ];

  return (
    <div>
      {DUMMY_LIST.length > 0 ? (
        <ul>
          {DUMMY_LIST.map((e) => {
            return (
              <Card
                key={e.id}
                amount={e.amount || 0}
                category={e.category || "No category"}
                date={e.date || new Date()}
                description={e.description || "No Description"}
              />
            );
          })}
        </ul>
      ) : (
        <p>No expense found, please start adding some expenses :)</p>
      )}
    </div>
  );
};

export default ExpensesList;
