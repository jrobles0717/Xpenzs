import "react-day-picker/dist/style.css";

import { DayPicker, Matcher } from "react-day-picker";
import React, { ChangeEvent, useEffect, useState } from "react";

import { Form } from "react-router-dom";

type Expense = {
  category: string | undefined;
  amount: number | undefined;
  date: string | undefined;
  description: string | undefined;
};

const initialExpense: Expense = {
  category: "",
  amount: undefined,
  date: undefined,
  description: "",
};

const AddExpense = () => {
  const [expenses, setExpenses] = useState<Expense>(initialExpense);
  const [date, setDate] = useState();

  const expenseChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setExpenses((prevExpense) => {
      return {
        ...prevExpense,
        [name]: value,
      };
    });
  };

  const dateChangeHandler = (e) => {
    console.log(e);
    setDate(e);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

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
          value={expenses.category}
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
          value={expenses.amount}
          onChange={expenseChangeHandler}
        />
      </div>
      <div className="input-container input-container__date">
        <label htmlFor="date">Date</label>
        <DayPicker mode="single" selected={date} onSelect={dateChangeHandler} />
        {/* <input
          id="date"
          name="date"
          placeholder="03/23/2023"
          className="input date p-sm"
          type="text"
          required
          value={expenses.date}
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
          value={expenses.description}
          onChange={expenseChangeHandler}
          autoFocus
          // defaultValue={event ? event.description : ""}
        />
      </div>
    </Form>
  );
};

export default AddExpense;
