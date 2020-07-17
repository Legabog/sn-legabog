import React from "react";
import classes from "./HeaderPlayLists.module.css";
import { NavLink } from "react-router-dom";

const HeaderPlayLists = (props) => {
  return (
    <>
      {props.playListSwitcher ? (
        <div
          className={classes.headerPlayLists}
          onClick={() => props.switchStateOfPlayLists(false)}
        >
          <NavLink
            to={`/music-player/${props.tempTrack.author}/${props.tempTrack.albumTitle}`}
          >
            <div className={classes.buttonBack}>
              <i className="fas fa-chevron-left"></i>
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
          <NavLink to="/music-list">
            <div className={classes.buttonBack}>
              <i className="fas fa-chevron-left"></i>
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
