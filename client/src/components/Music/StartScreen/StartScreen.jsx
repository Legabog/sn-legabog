import React from "react";
import classes from "./StartScreen.module.css";
import { NavLink } from "react-router-dom";
import apple_icon from "../../../assets/apple theme/logo_apple.svg"

const StartScreen = (props) => {
  return (
    <NavLink to="/music-list" style={{textDecoration: "none"}}>
      <div className={classes.startScreen}>
        <div className={classes.description}>
          <img src={apple_icon} alt="apple_icon"></img>
          <h1>MUSIC-PLAYER</h1> 
          <p>click to enter</p>
        </div>
      </div>
    </NavLink>
  );
};

export default StartScreen;
