import React from "react";
import classes from "./HeaderArtists.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../../../assets/images/map.svg";
import { useState } from "react";

const HeaderArtists = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={classes.headerArtists}>
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
      <h1>Artists</h1>
      <hr />
    </div>
  );
};

export default HeaderArtists;
