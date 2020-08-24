import React from "react";
import classes from "./StartScreen.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../assets/images/map.svg"

const StartScreen = (props) => {
  return (
    <NavLink to="/music-list" style={{textDecoration: "none"}}>
      <div className={classes.startScreen}>
        <div className={classes.description}>
          <svg>
            <use href={map_svg + "#apple_icon"}/>
          </svg>
          <h1>MUSIC-PLAYER</h1> 
          <p>click to enter</p>
        </div>
      </div>
    </NavLink>
  );
};

export default StartScreen;
