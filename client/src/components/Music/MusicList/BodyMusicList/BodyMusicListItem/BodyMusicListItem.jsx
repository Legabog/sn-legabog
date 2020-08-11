import React from "react";
import classes from "./BodyMusicListItem.module.css";
import map_svg from "../../../../../assets/images/map.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const BodyMusicListItem = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <React.Fragment>
      <div
        className={classes.item}
        onMouseOver={() => {
          setHover(1);
        }}
        onMouseOut={() => {
          setHover(0);
        }}
      >
        <NavLink to={`/music-list/${props.link}`}>
          <div className={classes.item}>
            <h2>{props.title}</h2>
            <svg>
              <use
                href={
                  hover
                    ? map_svg + "#arrow_right_hover"
                    : map_svg + "#arrow_right"
                }
              />
            </svg>
          </div>
        </NavLink>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default BodyMusicListItem;
