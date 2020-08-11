import React from "react";
import classes from "./HeaderOwnPlayListsRouter.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import map_svg from "../../../../assets/images/map.svg";

const HeaderOwnPlayListsRouter = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={classes.headerArtistItemRouter}>
      <NavLink
        to="/music-list/playlists/"
        onMouseOver={() => {
          setHover(1);
        }}
        onMouseOut={() => {
          setHover(0);
        }}
      >
        <div className={classes.buttonBack}>
          <svg>
            <use
              href={
                hover ? map_svg + "#arrow_back_hover" : map_svg + "#arrow_back"
              }
            />
          </svg>
          <h3>Playlists</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderOwnPlayListsRouter;
