import React from "react";
import classes from "./HeaderArtists.module.css";
import { NavLink } from "react-router-dom";
import arrow_back from "../../../../../assets/images/icons/music/arrow_back.svg"

const HeaderArtists = (props) => {
  return (
    <div className={classes.headerArtists}>
      <NavLink to="/music-list">
        <div className={classes.buttonBack}>
          <img src={arrow_back} alt="arrow-back"></img>
          <h3>Library</h3>
        </div>
      </NavLink>
      <h1>Artists</h1>
      <hr />
    </div>
  );
};

export default HeaderArtists;
