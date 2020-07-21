import React from "react";
import classes from "./Search.module.css";

const SearchInput = (props) => {
  return (
    <div className={classes.inputheader}>
      <input id="SearchInput" type="text" placeholder="Search"></input>
      <label htmlFor="SearchInput">Label for input</label>
    </div>
  );
};

export default SearchInput;
