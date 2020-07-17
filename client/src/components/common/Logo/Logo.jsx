import React from "react";
import logo from "../../../assets/images/logo_2.png";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <NavLink to={"/"}>
        <img src={logo} alt="description"></img>
      </NavLink>
      <div className={classes.logospan}>
        <a href="https://meduza.io/specials/coronavirus">
          <strong>#meduzacorona</strong>
        </a>
      </div>
    </div>
  );
};

export default Logo;
