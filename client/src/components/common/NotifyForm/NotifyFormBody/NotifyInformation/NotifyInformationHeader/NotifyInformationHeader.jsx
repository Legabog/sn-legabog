import React from "react";
import classes from "./NotifyInformationHeader.module.css";
import map_svg from "../../../../../../assets/images/map.svg";

const NotifyInformationHeader = (props) => {
  return (
    <React.Fragment>
      <div className={classes.notifyInformationHeader}>
        <h3>History of activity</h3>
        <svg
          onClick={() => {
            props.setModalWindow();
          }}
        >
          <use href={map_svg + "#cancel"} />
        </svg>
      </div>
      <div className={classes.notifyInformationAfterHeader}>
        <p>
          <b>The activity history</b> shows information about what devices you
          were logged in from and at what time. If you suspect that someone has
          accessed your profile, you can stop this activity at any time.
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default NotifyInformationHeader;
