import React from "react";
import classes from "./BodyMusicList.module.css";
import { NavLink } from "react-router-dom";

const BodyMusicList = (props) => {
  return (
    <div className={classes.bodyMusicList}>
      <NavLink to="/music-list/artists">
        <div className={classes.item1}>
          <h3>Artists</h3>
          <i className="fas fa-chevron-right"></i>
        </div>
      </NavLink>
      <hr />
      <NavLink to="/music-list/albums">
        <div className={classes.item2}>
          <h3>Albums</h3>
          <i className="fas fa-chevron-right"></i>
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
          <h3>Playlists</h3>
          <i className="fas fa-chevron-right"></i>
        </div>
      </NavLink>
      <hr />
    </div>
  );
};

export default BodyMusicList;
