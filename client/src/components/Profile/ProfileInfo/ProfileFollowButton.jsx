import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileFollowButton = (props) => {
  return (
    <>
      {props.followStatus ? (
        <div>
          <button
            disabled={props.fetchStatus}
            className={classes.follow}
            onClick={() => props.unfollow(props.userId)}
          >
            followed
          </button>
        </div>
      ) : (
        <div>
          <button
            disabled={props.fetchStatus}
            className={classes.unfollow}
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
