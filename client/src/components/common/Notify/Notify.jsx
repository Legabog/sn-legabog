import React from "react";
import classes from "./Notify.module.css";
import notify from "../../../assets/images/icons/ic_head_notify.svg"

const Notify = (props) => {
  return (
    <div className={classes.notify}>
      <img src={notify} alt="notify"></img>
    </div>
  );
};

export default Notify;