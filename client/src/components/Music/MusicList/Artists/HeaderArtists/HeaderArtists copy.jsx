import React from "react";
import classes from "./HeaderArtists.module.css";
import { NavLink } from "react-router-dom";

const HeaderArtists = (props) => {
  return (
    <div className={classes.headerArtists}>
      <NavLink to="/music-list">
        <div className={classes.buttonBack}>
          <i className="fas fa-chevron-left"></i>
          <h3>Library</h3>
        </div>
      </NavLink>
      <h1>Artists</h1>
      <hr />
    </div>
  );
};

export default HeaderArtists;
