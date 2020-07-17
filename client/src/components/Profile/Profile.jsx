import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import Preloader from ".././common/Preloader/Preloader";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.profile}>
      <ProfileInfo {...props} isOwner={props.isOwner} />
    </div>
  );
};

export default Profile;
