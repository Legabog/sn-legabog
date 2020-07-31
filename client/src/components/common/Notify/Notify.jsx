import React from "react";
import classes from "./Notify.module.css";
import notify_notactive from "../../../assets/images/icons/ic_head_notify.svg"
import notify_active from "../../../assets/images/icons/notify_active.svg"
import { useState } from "react";

const Notify = (props) => {

  let [active, toggleActive] = useState(0)

  const setActive = () => {
    toggleActive(!active)
  }

  return (
    <div className={classes.notify}>
      <img src={ active ? notify_active : notify_notactive} alt="notify" onClick={() => {
        props.toggleNotifyForm()
        setActive()
      }}></img>
    </div>
  );
};

export default Notify;
