import React from "react";
import { NavLink } from "react-router-dom";
import map_svg from "../../../assets/images/map.svg";
import classes from "./NavbarItem.module.css";

const NavbarItem = (props) => {
  return (
    <div className={`${classes.item} ${classes.active}`}>
      <svg>
        <use href={map_svg + props.svgId} />
      </svg>
      <NavLink to={props.link} activeClassName={classes.active}>
        <span>{props.itemName}</span>
      </NavLink>
    </div>
  );
};

export default NavbarItem;
