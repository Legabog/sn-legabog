import React from "react";
import classes from "./HeaderOwnPlayListsRouter.module.css"
import { NavLink } from "react-router-dom";
import arrow_back from "../../../../assets/images/icons/music/arrow_back.svg"

const HeaderOwnPlayListsRouter = (props) => {
  return (
    <div className={classes.headerArtistItemRouter}>
      <NavLink to="/music-list/playlists/">
        <div className={classes.buttonBack}>
          <img src={arrow_back} alt="arrow-back"></img>
          <h3>Playlists</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderOwnPlayListsRouter;
