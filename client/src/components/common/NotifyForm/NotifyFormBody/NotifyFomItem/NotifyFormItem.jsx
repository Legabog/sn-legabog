import React from "react";
import classes from "./NotifyFormItem.module.css";
import warning from "../../../../../assets/images/icons/notify/warning.png";

const NotifyFormItem = (props) => {
  return (
    <div className={classes.notifyFormItemWrapper}>
      <div className={classes.notifyFormItem}>
        <img src={warning} alt="warning" />
        <p>{props.text}</p>
      </div>
      <button onClick={props.setModalWindow}>Подробнее</button>

      <hr />
    </div>
  );
};

export default NotifyFormItem;
