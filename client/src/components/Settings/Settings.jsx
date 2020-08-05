import React from "react";
import classes from "./Settings.module.css";

const Settings = (props) => {
  return (
    <div className={classes.rootSettings}>
      <h1 className={classes.headerh1}>Account settings</h1>
      <div className={classes.themeSettings}>
        <h3>Theme Settings</h3>
        <button onClick={() => {
          props.shuffleMusic()
        }}></button>
      </div>
    </div>
  );
};

export default Settings;
