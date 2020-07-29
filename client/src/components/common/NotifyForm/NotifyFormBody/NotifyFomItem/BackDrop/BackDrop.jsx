import React from "react";
import classes from "./BackDrop.module.css";

const BackDrop = (props) => {
  return (
    <React.Fragment>
      {props.isOpen 
        ? <div className={classes.BackDrop} onClick={props.onClick}></div>
        : null}
    </React.Fragment>
    
  )

}
  
  

export default BackDrop;
