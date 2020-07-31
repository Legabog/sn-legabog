import React from "react";
import classes from "./NotifyFormHeader.module.css";
import { NavLink } from "react-router-dom";

const NotifyFormHeader = (props) => {
  return (
    <React.Fragment>
      <div className={classes.notifyFormHeader}>
        <h3>Your page</h3>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <hr style={{height: "0", border: "none",borderTop: "1px solid rgb(240, 236, 236)", marginTop: "-10px"}}/>
    </React.Fragment>
  );
};

export default NotifyFormHeader;
