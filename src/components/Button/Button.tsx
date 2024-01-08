import React from "react";

type ButtonType = "button" | "submit" | "reset";
const Button: React.FC<{
  type: ButtonType;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ type, className, onClick, children }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
