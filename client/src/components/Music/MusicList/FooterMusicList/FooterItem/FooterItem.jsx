import React from "react";
import classes from "./FooterItem.module.css";
import { NavLink } from "react-router-dom";

const FooterItem = (props) => {
  return (
    <NavLink to={`/music-player/${props.author}/${props.title}`}>
      <div className={classes.item} onClick={() => {
        props.toggleSwitcher(3)
      }}>
        <img src={props.img} alt="description" />
        <div className={classes.discription}>
          <h5 className={classes.album}>
            <strong>{props.title}</strong>
          </h5>
          <p className={classes.artist}>
            <strong>{props.author}</strong>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default FooterItem;