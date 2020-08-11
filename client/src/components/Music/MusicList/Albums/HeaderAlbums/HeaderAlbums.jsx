import React from "react";
import classes from "./HeaderAlbums.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../../../assets/images/map.svg";
import { useState } from "react";

const HeaderAlbums = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={classes.headerAlbums}>
      <div className={classes.buttonBack}>
        <NavLink
          to="/music-list"
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
          <h3>Library</h3>
        </NavLink>
      </div>
      <h1>Albums</h1>
      <hr />
    </div>
  );
};

export default HeaderAlbums;
