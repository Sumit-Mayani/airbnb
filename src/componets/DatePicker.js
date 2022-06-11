import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { People } from "@mui/icons-material";
import { Button } from "@mui/material";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guests
        <People />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button>Search Airbnb</Button>
    </div>
  );
};

export default DatePicker;
