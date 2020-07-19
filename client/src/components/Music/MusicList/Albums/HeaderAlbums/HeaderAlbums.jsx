import React from "react";
import classes from "./HeaderAlbums.module.css";
import { NavLink } from "react-router-dom";
import arrow_back from "../../../../../assets/images/icons/music/arrow_back.svg"

const HeaderAlbums = (props) => {
  return (
    <div className={classes.headerAlbums}>
      <NavLink to="/music-list">
        <div className={classes.buttonBack}>
          <img src={arrow_back} alt="arrow-back"></img>
          <h3>Library</h3>
        </div>
      </NavLink>
      <h1>Albums</h1>
      <hr />
    </div>
  );
};

export default HeaderAlbums;
