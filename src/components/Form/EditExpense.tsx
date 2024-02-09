import { Expense, initialExpense } from "../../util/types";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import Button from "../Button/Button";
import { DayPicker } from "react-day-picker";
import { ExpensesContext } from "../../context/ExpensesContext";
import { Form } from "react-router-dom";
import { FormContext } from "../../context/FormContext";

const EditExpense: React.FC<{ oldExpense: Expense; onClose: () => void }> = ({
  oldExpense,
  onClose,
}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isDatePicker, setIsDatePicker] = useState<boolean>(false);
  const { expenses, updateExpense } = useContext(ExpensesContext);
  const [expense, setExpense] = useState<Expense>(oldExpense);

  useEffect(() => {
    setDate(expense.date);
  }, []);

  const expenseChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    // console.log(e);
    // updateForm(e);
    // const { name, value } = e.target;
    // setExpenses((prevExpense) => {
    //   return {
    //     ...prevExpense,
    //     [name]: value,
    //   };
    // });

    const { name, value } = e.target;
    setExpense((prevState: Expense) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const dateChangeHandler = (e: React.SetStateAction<Date | undefined>) => {
    console.log(e);
    setDate(e);
    // updateDate(e);

    setExpense((prevState: Expense) => {
      return {
        ...prevState,
        date: e as Date,
      };
    });

    setIsDatePicker((prevState) => {
      return !prevState;
    });
  };

  const dateButtonHandler = () => {
    setIsDatePicker((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateExpense(expense);
    onClose();
    // console.log(form);
    // Reset form
    // setExpense({
    //   ...initialExpense,
    //   id: (Math.random() * 10000).toFixed(0).toString(),
    // });
    // setDate(undefined);
    // setIsDatePicker(false);
  };

  return (
    <Form className="form" onSubmit={submitHandler}>
      <div className="input-container input-container__category">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          placeholder="Electricity"
          className="input category p-sm"
          type="text"
          required
          value={expense.category}
          onChange={expenseChangeHandler}
        />
      </div>
      <div className="input-container input-container__amount">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          placeholder="29.99"
          className="input amount p-sm"
          type="number"
          required
          value={expense.amount}
          onChange={expenseChangeHandler}
        />
      </div>
      <div className="input-container input-container__date">
        <label htmlFor="date">Date</label>
        <Button
          type="button"
          onClick={dateButtonHandler}
          className="btn-select-date"
        >
          {date?.toLocaleDateString() || "Select Date"}
        </Button>
        {isDatePicker && (
          <DayPicker
            mode="single"
            selected={date}
            onSelect={dateChangeHandler}
          />
        )}
        {/* <input
      id="date"
      name="date"
      placeholder="03/23/2023"
      className="input date p-sm"
      type="text"
      required
      value={expense.date}
      onChange={expenseChangeHandler}
    /> */}
      </div>
      <div className="input-container input-container__description">
        <label htmlFor="description">Description</label>
        {/* <input id="description" name="description" type="text" required /> */}
        <textarea
          id="description"
          name="description"
          placeholder="Description..."
          className="description p-sm"
          rows={1}
          required
          maxLength={200}
          value={expense.description}
          onChange={expenseChangeHandler}
          autoFocus
          // defaultValue={event ? event.description : ""}
        />
      </div>
      <Button type="submit" className="btn-primary btn-submit">
        Edit Expense
      </Button>
    </Form>
  );
};

export default EditExpense;
