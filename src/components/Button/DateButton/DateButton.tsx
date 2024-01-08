import React, { useState } from "react";

import DayPicker from "react-day-picker";

const DateButton = ({ date, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      disabled={date === null}
      style={{ backgroundColor: "red" }}
    >
      {date !== null ? date.toDateString() : "Select a date"}
    </button>
  );
};

export default DateButton;
