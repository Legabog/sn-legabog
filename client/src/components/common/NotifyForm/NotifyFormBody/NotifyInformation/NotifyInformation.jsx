import React from "react";
import classes from "./NotifyInformation.module.css";
import NotifyInformationHeader from "./NotifyInformationHeader/NotifyInformationHeader";
import NotifyInformationBody from "./NotifyInformationBody/NotifyInformationBody";
import NotifyInformationFooter from "./NotifyInformationFooter/NotifyInformationFooter";

const NotifyInformation = (props) => {
  return (
    <div className={classes.notifyInformation}>
      <NotifyInformationHeader setModalWindow={props.setModalWindow} />
      <NotifyInformationBody />
      <NotifyInformationFooter setModalWindow={props.setModalWindow}/>
    </div>
  );
};

export default NotifyInformation;
