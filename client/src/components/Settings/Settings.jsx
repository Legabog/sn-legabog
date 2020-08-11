import React from "react";
import classes from "./Settings.module.css";

const Settings = (props) => {
  return (
    <div className={classes.rootSettings}>
      <h1 className={classes.headerh1}>Account settings</h1>
      <div className={classes.themeSettings}>
        <h2>Theme Settings</h2>
      </div>
    </div>
  );
};

export default Settings;
