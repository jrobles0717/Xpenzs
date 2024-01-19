import "react-day-picker/dist/style.css";

import { DayPicker, Matcher } from "react-day-picker";
import { Expense, initialExpense } from "../../util/types";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import Button from "../Button/Button";
import { ExpensesContext } from "../../context/ExpensesContext";
import { Form } from "react-router-dom";
import { FormContext } from "../../context/FormContext";

const AddExpense: React.FC = () => {
  // const [expenses, setExpenses] = useState<Expense>(initialExpense);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isDatePicker, setIsDatePicker] = useState<boolean>(false);
  const { form, updateForm, updateDate } = useContext(FormContext);
  const { expenses, updateExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    console.log(form);
  }, [form]);

  const expenseChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    // console.log(e);
    updateForm(e);
    // const { name, value } = e.target;
    // setExpenses((prevExpense) => {
    //   return {
    //     ...prevExpense,
    //     [name]: value,
    //   };
    // });
  };

  const dateChangeHandler = (e) => {
    console.log(e);
    setDate(e);
    updateDate(e);
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
    updateExpenses(form);
    console.log(form);
    // console.log(expenses, date);
    // console.log(e);
  };

  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  // useEffect(() => {
  //   console.log(expenses);
  // }, [expenses]);

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
          value={form.category}
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
          value={form.amount}
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
          value={form.date}
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
          value={form.description}
          onChange={expenseChangeHandler}
          autoFocus
          // defaultValue={event ? event.description : ""}
        />
      </div>
      <Button type="submit" className="btn-primary btn-submit">
        Add Expense
      </Button>
    </Form>
  );
};

export default AddExpense;
