import { Expense, ProviderProps } from "../util/types";
import React, { useState } from "react";

import { ExpensesContext } from "./ExpensesContext";

export const ExpensesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[] | []>([]);

  const addExpense = (e: Expense) => {
    setExpenses((prevExpenses: Expense[]) => {
      return [...prevExpenses, e];
    });
  };

  const updateExpense = (e: Expense) => {
    setExpenses((prevExpenses: Expense[]) => {
      return prevExpenses.map((item) => {
        if (item.id === e.id) {
          return e;
        } else {
          return item;
        }
      });

      // return [...prevExpenses, e];
    });
  };

  // TODO
  const deleteExpense = (e: Expense) => {
    setExpenses((prevExpenses: Expense[]) => {
      return [...prevExpenses, e];
    });
  };

  const contextValue = React.useMemo(
    () => ({ expenses, addExpense, updateExpense, deleteExpense }),
    [expenses]
  );

  return (
    <ExpensesContext.Provider value={contextValue}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
