import React from "react";
import classes from "./ErrorRoute.module.css";
import error from "../../../assets/images/icons/error.svg";

const ErrorRoute = (props) => {
  return (
    <div className={classes.error}>
      <div className={classes.errorIcon}>
        <img src={error} alt="error"></img>
      </div>
      <div className={classes.errorDescription}>
        <h2>Oops, error</h2>
        <div className={classes.errorNumber}>
          <h1>404</h1>
        </div>
        <hr />
        <h2>Page not found !!!</h2>
        <div className={classes.lastBlock}></div>
      </div>
    </div>
  );
};

export default ErrorRoute;
