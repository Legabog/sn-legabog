import React from "react";
import classes from "./HeaderArtistItemRouter.module.css";
import { NavLink } from "react-router-dom";
import arrow_back from "../../../../assets/images/icons/music/arrow_back.svg"

const HeaderArtistItemRouter = (props) => {
  return (
    <div className={classes.headerArtistItemRouter}>
      <NavLink to="/music-list/artists">
        <div className={classes.buttonBack}>
          <img src={arrow_back} alt="arrow-back"></img>
          <h3>Artists</h3>
        </div>
      </NavLink>
      <h1>{props.nameArtist}</h1>
      <hr />
    </div>
  );
};

export default HeaderArtistItemRouter;
