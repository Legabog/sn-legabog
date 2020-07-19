import React from "react";
import classes from "./BodyMusicList.module.css";
import { NavLink } from "react-router-dom";
import arrow_right from "../../../../assets/images/icons/music/arrow_right.svg"

const BodyMusicList = (props) => {
  return (
    <div className={classes.bodyMusicList}>
      <NavLink to="/music-list/artists">
        <div className={classes.item1}>
          <h2>Artists</h2>
          <img src={arrow_right} alt="arrow-right"></img>
        </div>
      </NavLink>
      <hr />
      <NavLink to="/music-list/albums">
        <div className={classes.item2}>
          <h2>Albums</h2>
          <img src={arrow_right} alt="arrow-right"></img>
        </div>
      </NavLink>
      <hr />
      <NavLink to="/music-list/playlists">
        <div
          className={classes.item3}
          onClick={() => {
            props.switchStateOfPlayLists(false);
          }}
        >
          <h2>Playlists</h2>
          <img src={arrow_right} alt="arrow-right"></img>
        </div>
      </NavLink>
      <hr />
    </div>
  );
};

export default BodyMusicList;
