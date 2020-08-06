import React from "react";
import classes from "./Notify.module.css";
import map_svg from "../../../assets/images/map.svg";
import { useState } from "react";

const Notify = (props) => {
  let [active, toggleActive] = useState(0);

  const setActive = () => {
    toggleActive(!active);
  };

  return (
    <div className={classes.notify}>
      <svg
        viewBox="0 0 20 20"
        onClick={() => {
          props.toggleNotifyForm();
          setActive();
        }}
      >
        <use href={active ? map_svg + "#notify_active" : map_svg + "#notify"} />
      </svg>
    </div>
  );
};

export default Notify;
