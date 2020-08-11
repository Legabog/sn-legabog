import React from "react";
import classes from "./HeaderPlayLists.module.css";
import { NavLink } from "react-router-dom";
import map_svg from "../../../../../assets/images/map.svg";
import { useState } from "react";

const HeaderPlayLists = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <>
      {props.playListSwitcher ? (
        <div
          className={classes.headerPlayLists}
          onClick={() => props.switchStateOfPlayLists(false)}
        >
          <NavLink
            to={`/music-player/${props.tempTrack.author}/${props.tempTrack.albumTitle}`}
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
                    hover
                      ? map_svg + "#arrow_back_hover"
                      : map_svg + "#arrow_back"
                  }
                />
              </svg>
              <h3>{props.tempTrack.albumTitle}</h3>
            </div>
          </NavLink>
          <h1>Playlists</h1>
        </div>
      ) : (
        <div
          className={classes.headerPlayLists}
          onClick={() => props.switchStateOfPlayLists(false)}
        >
          <NavLink
            to="/music-list"
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
                    hover
                      ? map_svg + "#arrow_back_hover"
                      : map_svg + "#arrow_back"
                  }
                />
              </svg>
              <h3>Library</h3>
            </div>
          </NavLink>
          <h1>Playlists</h1>
        </div>
      )}
    </>
  );
};

export default HeaderPlayLists;
