import React from "react";
import classes from "./HeaderOwnPlayListsRouter.module.css"
import { NavLink } from "react-router-dom";

const HeaderOwnPlayListsRouter = (props) => {
  return (
    <div className={classes.headerArtistItemRouter}>
      <NavLink to="/music-list/playlists/">
        <div className={classes.buttonBack}>
          <i className="fas fa-chevron-left"></i>
          <h3>Playlists</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderOwnPlayListsRouter;
