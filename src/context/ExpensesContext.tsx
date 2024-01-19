import { ExpensesContextType, initialExpense } from "../util/types";

import React from "react";

export const ExpensesContext = React.createContext<ExpensesContextType>({
  expenses: [initialExpense],
  updateExpenses: () => {},
});
