import React from "react";
import classes from "./NotifyInformationFooter.module.css";

const NotifyInformationFooter = (props) => {
  return (
    <div className={classes.NotifyInformationFooter}>
      <button onClick={() => {
          props.setModalWindow()
      }}>Закрыть</button>
    </div>
  );
};

export default NotifyInformationFooter;
