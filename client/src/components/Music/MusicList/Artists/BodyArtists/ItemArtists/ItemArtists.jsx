import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ItemArtists.module.css";
import arrow_right from "../../../../../../assets/images/icons/music/arrow_right.svg"

const ItemArtists = (props) => {
  return (
    <div>
      <NavLink to={`/music-list/artists/${props.nameArtist}`}>
        <div className={classes.itemArtists}>
          <h2>{props.nameArtist}</h2>
          <img src={arrow_right} alt="arrow-right"></img>
        </div>
      </NavLink>
      <hr />
    </div>
  );
};

export default ItemArtists;
