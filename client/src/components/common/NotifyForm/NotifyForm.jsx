import React from "react";
import classes from "./NotifyForm.module.css";
import NotifyFormHeader from "./NotifyFormHeader/NotifyFormHeader";
import NotifyFormBody from "./NotifyFormBody/NotifyFormBody";

const NotifyForm = (props) => {
  return (
    <div
      id="notify-form"
      className={classes.notifyForm}
      style={{
        top: `${props.notifyTop}`,
        opacity: `${props.notifyOpacity}`,
        visibility: `${props.notifyVisibility}`,
      }}
    >
      <NotifyFormHeader />
      <NotifyFormBody />
    </div>
  );
};

export default NotifyForm;
