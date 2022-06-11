import React, { useState } from "react";
import { Button } from "@mui/material";
import DatePicker from "./DatePicker";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <DatePicker />}
        <Button onClick={() => setShowSearch(!showSearch)} variant="outlined" className="banner__searchButton" >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          suscipit numquam quam fuga eveniet ut sint qui corporis? Temporibus,
          rem.
        </h5>
        <Button>Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
