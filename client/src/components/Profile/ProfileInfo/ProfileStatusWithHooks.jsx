import React from "react";
import classes from "./ProfileInfo.module.css";
import { useState } from "react";
import { useEffect } from "react";
import map_svg from "../../../assets/images/map.svg";

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
      {props.isOwner ? (
        <div>
          <svg>
            <use href={map_svg + "#status"} />
          </svg>
          <span>{props.status || "---"}</span>
        </div>
      ) : !editMode ? (
        <div>
          <svg>
            <use href={map_svg + "#status"} />
          </svg>
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
          <svg>
            <use href={map_svg + "#status"} />
          </svg>
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
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
