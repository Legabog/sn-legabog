import React from "react";
import classes from "./HeaderArtistItemRouter.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../../assets/images/map.svg";
import { useState } from "react";

const HeaderArtistItemRouter = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={classes.headerArtistItemRouter}>
      <div className={classes.buttonBack}>
        <NavLink
          to="/music-list/artists"
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          <svg>
            <use
              href={
                hover ? map_svg + "#arrow_back_hover" : map_svg + "#arrow_back"
              }
            />
          </svg>
          <h3>Artists</h3>
        </NavLink>
      </div>
      <h1>{props.nameArtist}</h1>
      <hr />
    </div>
  );
};

export default HeaderArtistItemRouter;
