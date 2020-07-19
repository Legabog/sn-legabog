import React from "react";
import classes from "./HeaderMusicPlayer.module.css";
import { NavLink } from "react-router-dom";
import arrow_back from  "../../../../assets/images/icons/music/arrow_back.svg"

const HeaderMusicPlayer = (props) => {
  return (
    <div className={classes.headerMusicPlayer}>
      <NavLink
        to={
          props.switcher === 1
            ? `/music-list/artists/${props.nameArtist}`
            : props.switcher === 2
            ? "/music-list/albums"
            : "/music-list/"
        }
      >
        <div
          className={classes.buttonBack}
          onClick={() => {
            props.toggleSwitcher(1);
          }}
        >
          <img src={arrow_back} alt="arrow-back"></img>
          <h3>
            {props.switcher === 1
              ? props.nameArtist
              : props.switcher === 2
              ? "Albums"
              : "Library"}
          </h3>
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderMusicPlayer;
