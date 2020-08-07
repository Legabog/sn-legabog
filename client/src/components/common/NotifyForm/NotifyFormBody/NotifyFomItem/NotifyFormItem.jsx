import React from "react";
import classes from "./NotifyFormItem.module.css";
import map_svg from "../../../../../assets/images/map.svg"

const NotifyFormItem = (props) => {
  return (
    <div className={classes.notifyFormItemWrapper}>
      <div className={classes.notifyFormItem}>
        <svg>
          <use href={map_svg + "#error_circle"}/>
        </svg>
        <p>{props.text}</p>
      </div>
      <button onClick={props.setModalWindow}>Подробнее</button>

      <hr />
    </div>
  );
};

export default NotifyFormItem;
