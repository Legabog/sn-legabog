import React from "react";
import classes from "./NotifyInformationItem.module.css";

const NotifyInformationItem = (props) => {
  return (
    <div className={classes.NotifyInformationItem}>
      <img src={props.img} alt={props.img} />
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
