import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ItemArtists.module.css";

const ItemArtists = (props) => {
  return (
    <div>
      <NavLink to={`/music-list/artists/${props.nameArtist}`}>
        <div className={classes.itemArtists}>
          <h3>{props.nameArtist}</h3>
          <i className="fas fa-chevron-right"></i>
        </div>
      </NavLink>
      <hr />
    </div>
  );
};

export default ItemArtists;
