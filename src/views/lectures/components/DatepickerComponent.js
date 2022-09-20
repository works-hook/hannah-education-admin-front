import React, { format, useState } from "react";
import { Button } from "react-bootstrap";
import { DatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatepickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button onClick={handleClick}>
        {format(startDate, "yyyy-MM-dd")}
      </Button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
    </>
  );
};

export default DatepickerComponent;