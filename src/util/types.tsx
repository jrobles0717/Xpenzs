export enum Button {
  RESET = "reset",
  SUBMIT = "submit",
  BUTTON = "button",
}
export type ButtonType = "reset" | "submit" | "button";

export type Expense = {
  category: string | undefined;
  amount: number | undefined;
  date: Date | undefined;
  description: string | undefined;
  id: string;
};

export type FormProviderProps = {
  children: React.ReactNode;
};

export type FormContextType = {
  form: Expense;
  updateForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // updateColor: (name: string, color: string) => void;
  // updateImage: (img: string) => void;
  // updateDotType: (value: string) => void;
};

export const initialExpense: Expense = {
  category: "",
  amount: undefined,
  date: undefined,
  description: "",
  id: (Math.random() * 100).toString(),
};
