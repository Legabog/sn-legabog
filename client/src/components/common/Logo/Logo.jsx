import React from "react";
import classes from "./Logo.module.css";
import map_svg from "../../../assets/images/map.svg";

const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <a href={"https://github.com/Legabog"}>
        <div className={classes.githubprofile}>
          <svg>
            <use href={map_svg + "#github_logo"} />
          </svg>
          <h3>Legabog</h3>
        </div>
      </a>
    </div>
  );
};

export default Logo;
