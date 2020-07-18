import React from "react";
import classes from "./ProfileInfo.module.css";
import { useState } from "react";
import { useEffect } from "react";
import status_icon from "../../../assets/images/icons/status.svg";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={classes.profileStatus}>
      {props.isOwner 
        ? <div>
          <img src={status_icon} alt="status"></img>
          <span>
            {props.status || "---"}
          </span>
        </div>
        : !editMode ? (
          <div>
            <img src={status_icon} alt="status"></img>
            <span
              onClick={() => {
                setEditMode(true);
              }}
            >
              {props.status || "---"}
            </span>
          </div>
        ) : (
          <div>
            <img src={status_icon} alt="status"></img>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              value={status}
              onBlur={() => {
                setEditMode(false);
                props.updateProfileStatus(status);
              }}
            ></input>
          </div>
        )
      }
      
    </div>
  );
};

export default ProfileStatusWithHooks;
