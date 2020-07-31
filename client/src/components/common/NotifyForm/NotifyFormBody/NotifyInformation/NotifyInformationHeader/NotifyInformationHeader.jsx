import React from "react";
import classes from "./NotifyInformationHeader.module.css";
import cancel from "../../../../../../assets/images/icons/notify/cancel.svg";

const NotifyInformationHeader = (props) => {
  return (
    <React.Fragment>
      <div className={classes.notifyInformationHeader}>
        <h3>History of activity</h3>
        <img
          src={cancel}
          alt="cancel"
          onClick={() => {
            props.setModalWindow();
          }}
        />
      </div>
      <div className={classes.notifyInformationAfterHeader}>
        <p>
          <b>The activity history</b> shows information about what devices you were
          logged in from and at what time. If you suspect that someone has
          accessed your profile, you can stop this activity at any time.
        </p>
        <hr/>
      </div>
      
    </React.Fragment>
  );
};

export default NotifyInformationHeader;
