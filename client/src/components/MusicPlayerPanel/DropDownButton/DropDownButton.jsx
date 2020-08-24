import React from "react";
import classes from "../MusicPlayerPanel.module.css"
import map_svg from "../../../assets/images/map.svg";

const DropDownButton = (props) => {
  return (
    <React.Fragment>
      <div className={classes.dropDown}>
        <svg alt="dropDown" onClick={props.toggleMusicPanel}>
          <use href={map_svg + "#dropdown-2"} />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default DropDownButton;
