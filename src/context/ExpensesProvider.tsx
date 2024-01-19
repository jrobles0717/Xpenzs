import { Expense, ProviderProps } from "../util/types";
import React, { useState } from "react";

import { ExpensesContext } from "./ExpensesContext";

export const ExpensesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[] | []>([]);

  const updateExpenses = (e: Expense) => {
    setExpenses((prevExpenses: Expense[]) => {
      return [...prevExpenses, e];
    });
  };

  const contextValue = React.useMemo(
    () => ({ expenses, updateExpenses }),
    [expenses]
  );

  return (
    <ExpensesContext.Provider value={contextValue}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
