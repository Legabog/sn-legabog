import React from "react";
import autor from "../../../assets/images/autor.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <a href={"https://github.com/Legabog"}>
        <img src={autor} alt="description"></img>
      </a>
      <div className={classes.logospan}>
        <a href="https://meduza.io/specials/coronavirus">
          <strong>#meduzacorona</strong>
        </a>
      </div>
    </div>
  );
};

export default Logo;
