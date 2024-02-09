import React, { useContext, useState } from "react";

import Card from "../Card/Card";
import EditExpense from "../Form/EditExpense";
import { Expense } from "../../util/types";
import { ExpensesContext } from "../../context/ExpensesContext";
import Modal from "../Modal/Modal";

const ExpensesList = () => {
  const { expenses } = useContext(ExpensesContext);
  const [editExpense, setEditExpense] = useState<Expense | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [idValue, setIdValue] = useState("");

  const findExpense = (id: string) => {
    return expenses.find((e: Expense) => {
      return e.id === id;
    });
  };

  const toggleModal = (id: string) => {
    setIsOpen(!isOpen);
    setIdValue(id);
    const result = findExpense(id);

    if (result != undefined) {
      setEditExpense(result);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setEditExpense(null);
  };

  // const DUMMY_LIST: Expense[] | [] = [];

  // const DUMMY_LIST: Expense[] | [] = [
  //   {
  //     amount: 100,
  //     date: new Date(),
  //     id: "1",
  //     description: "First test ever!",
  //     category: "Water",
  //   },
  //   {
  //     amount: 240,
  //     category: "Internet",
  //     date: new Date(new Date().getDate() - 1),
  //     description: "Second test like always!",
  //     id: "2",
  //   },
  //   {
  //     amount: 750,
  //     category: "House",
  //     date: new Date(new Date().getDate() - 3),
  //     description: "Third test like my future life!",
  //     id: "3",
  //   },
  //   {
  //     amount: 620,
  //     category: "Car",
  //     date: new Date(new Date().getDate() - 2),
  //     description: "Forth test like my future life!",
  //     id: "4",
  //   },
  //   {
  //     amount: 500,
  //     category: "Debts",
  //     date: new Date(new Date().getDate() - 7),
  //     description: "Fifth test like my future life!",
  //     id: "5",
  //   },
  //   {
  //     amount: 40,
  //     category: "Gas",
  //     date: new Date(new Date().getDate() - 6),
  //     description: "Six test like my future life!",
  //     id: "6",
  //   },
  // ];

  return (
    <div>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((e) => {
            return (
              <Card
                key={e.id}
                id={e.id}
                amount={e.amount || 0}
                category={e.category || "No category"}
                date={e.date || new Date()}
                description={e.description || "No Description"}
                isOpen={toggleModal}
              />
            );
          })}
        </ul>
      ) : (
        <p>No expense found, please start adding some expenses :)</p>
      )}
      {editExpense && (
        <Modal isOpen={isOpen}>
          <EditExpense oldExpense={editExpense} onClose={handleClose} />
          {/* <p>This is editing modal for id: {idValue}</p> */}
        </Modal>
      )}
    </div>
  );
};

export default ExpensesList;
