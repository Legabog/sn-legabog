import React from "react";
import classes from "./StartScreen.module.css";
import { NavLink } from "react-router-dom";
import playlist from "../../../assets/images/icons/music/playlist.svg"

const StartScreen = (props) => {
  return (
    <NavLink to="/music-list" style={{textDecoration: "none"}}>
      <div className={classes.startScreen}>
        <div className={classes.description}>
          <img src={playlist} alt={playlist}></img>
          <h1>Music-player</h1>
          
        </div>
        <p>press to Enter</p>
      </div>
    </NavLink>
  );
};

export default StartScreen;
