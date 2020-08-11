import React from "react";
import classes from "./NotifyInformationItem.module.css";
import map_svg from "../../../../../../../assets/images/map.svg"

const NotifyInformationItem = (props) => {
  return (
    <div className={classes.NotifyInformationItem}>
      <svg>
        <use href={map_svg + `#${props.img}`}/>
      </svg>
      <div className={classes.description}>
        <h5>
          {props.typeOfSystem} ● {props.city}, {props.country}
        </h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default NotifyInformationItem;
