import React from "react";
import classes from "./Header.module.css"
import map_svg from "../../../../assets/images/map.svg";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <svg>
        <use href={map_svg + "#discussions"} />
      </svg>
      <h2>Posts</h2>
    </div>
  );
};

export default Header;
