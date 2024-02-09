export enum Button {
  RESET = "reset",
  SUBMIT = "submit",
  BUTTON = "button",
}
export type ButtonType = "reset" | "submit" | "button";

export type Expense = {
  category: string | undefined;
  amount: number | string;
  date: Date | undefined;
  description: string | undefined;
  id: string;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type FormContextType = {
  form: Expense;
  updateForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateDate: (date: Date) => void;
  // updateColor: (name: string, color: string) => void;
  // updateImage: (img: string) => void;
  // updateDotType: (value: string) => void;
};

export type ExpensesContextType = {
  expenses: Expense[] | [];
  addExpense: (e: Expense) => void;
  deleteExpense: (e: Expense) => void;
  updateExpense: (e: Expense) => void;
};

export const initialExpense: Expense = {
  category: "",
  amount: "",
  date: undefined,
  description: "",
  id: (Math.random() * 10000).toFixed(0).toString(),
};
