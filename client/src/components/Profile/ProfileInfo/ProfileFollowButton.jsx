import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileFollowButton = (props) => {
  return (
    <>
      {props.followStatus ? (
        <div className={classes.follow}>
          <button
            disabled={props.fetchStatus}
            onClick={() => props.unfollow(props.userId)}
          >
            followed
          </button>
        </div>
      ) : (
        <div className={classes.unfollow}>
          <button
            disabled={props.fetchStatus}
            
            onClick={() => props.follow(props.userId)}
          >
            unfollowed
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileFollowButton;
