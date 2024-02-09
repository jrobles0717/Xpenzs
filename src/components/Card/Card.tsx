import React, { useState } from "react";

const Card: React.FC<{
  id: string;
  amount: number;
  description: string;
  category: string;
  date: Date;
  isOpen: (id: string) => void;
}> = ({ id, amount, category, date, description, isOpen }) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModalHandler = () => {
    isOpen(id);
  };

  return (
    <li className="expenses__card" onClick={openModalHandler}>
      <p className="expenses__card-category">{category}</p>
      <p className="expenses__card-amount">{amount}</p>
      <p className="expenses__card-date">{date.toDateString()}</p>
      <p className="expenses__card-description">{description}</p>
    </li>
  );
};

export default Card;
