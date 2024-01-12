import AddExpense from "../components/Form/AddExpense";
import ExpensesList from "../components/ExpensesList/ExpensesList";
import React from "react";

const Expenses = () => {
  return (
    <div className="expenses">
      <h1 className="title-text mb-md">Expenses Page</h1>
      <AddExpense />
      <ExpensesList />
    </div>
  );
};

export default Expenses;
