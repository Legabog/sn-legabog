import React from "react";
import classes from "./HeaderPlayLists.module.css";
import { NavLink } from "react-router-dom";
import arrow_back from "../../../../../assets/images/icons/music/arrow_back.svg"

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
              <img src={arrow_back} alt="arrow-back"></img>
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
             <img src={arrow_back} alt="arrow-back"></img>
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
