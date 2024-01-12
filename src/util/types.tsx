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
