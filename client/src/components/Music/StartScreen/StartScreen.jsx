import React from "react";
import classes from "./StartScreen.module.css";
import { NavLink } from "react-router-dom";

const StartScreen = (props) => {
  return (
    <NavLink to="/music-list">
      <div className={classes.startScreen}>
        <i className="fas fa-headphones-alt"></i>
        <div className={classes.description}>
          <h1>Music-player</h1>
          <p>press to Enter</p>
        </div>
      </div>
    </NavLink>
  );
};

export default StartScreen;
