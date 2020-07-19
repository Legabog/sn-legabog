import React from "react";
import { NavLink } from "react-router-dom";
import MusicDefault from "../../../../../assets/apple theme/music.jpg";
import classes from "./ArtistItem.module.css";

const ArtistItem = (props) => {
  return (
    <NavLink to={`/music-player/${props.author}/${props.title}`}>
      <div className={classes.item}>
        <img src={props.img || MusicDefault} alt="description" />
        <div className={classes.discription}>
          <h4 className={classes.album}>
            <strong>{props.title}</strong>
          </h4>
          <h4 className={classes.artist}>
            <strong>{props.author}</strong>
          </h4>
        </div>
      </div>
    </NavLink>
  );
};

export default ArtistItem;
