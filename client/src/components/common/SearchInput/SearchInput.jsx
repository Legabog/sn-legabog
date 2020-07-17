import React from "react";
import classes from "./Search.module.css";

const SearchInput = (props) => {
  return (
    <div className={classes.inputheader}>
        <input type="text" placeholder="Search"></input>
    </div>
  );
};

export default SearchInput;
