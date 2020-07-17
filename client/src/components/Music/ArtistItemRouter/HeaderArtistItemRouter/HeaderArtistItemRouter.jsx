import React from "react";
import classes from "./HeaderArtistItemRouter.module.css";
import { NavLink } from "react-router-dom";

const HeaderArtistItemRouter = (props) => {
  return (
    <div className={classes.headerArtistItemRouter}>
      <NavLink to="/music-list/artists">
        <div className={classes.buttonBack}>
          <i className="fas fa-chevron-left"></i>
          <h3>Artists</h3>
        </div>
      </NavLink>
      <h1>{props.nameArtist}</h1>
      <hr />
    </div>
  );
};

export default HeaderArtistItemRouter;
