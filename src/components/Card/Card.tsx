import React from "react";

const Card: React.FC<{
  amount: number;
  description: string;
  category: string;
  date: Date;
}> = ({ amount, category, date, description }) => {
  return (
    <li className="expenses__card">
      <p className="expenses__card-category">{category}</p>
      <p className="expenses__card-amount">{amount}</p>
      <p className="expenses__card-date">{date.toDateString()}</p>
      <p className="expenses__card-description">{description}</p>
    </li>
  );
};

export default Card;
