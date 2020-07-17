import React from "react";
import DefaultPhoto from "../../../assets/images/user.png";
import classes from "./ProfileInfo.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileFollowButton from "./ProfileFollowButton";
import download from "../../../assets/images/icons/download.svg";

const ProfileInfo = (props) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={classes.allProfile}>
      <div className={classes.profile}>
        <div className={classes.avatarFrame}>
          <div className={classes.avatar}>
            {props.isOwner ? (
              <img
                src={props.profile.photos.large || DefaultPhoto}
                alt="description"
              />
            ) : (
              <div className={classes.savePhoto}>
                <label htmlFor="save-photo">
                  <img
                    src={props.profile.photos.large || DefaultPhoto}
                    alt="description"
                  />
                  <div className={classes.downloadIcon}>
                  <img src={download} alt="download"></img>
                  </div>
                  
                </label>
                <input
                  id="save-photo"
                  type="file"
                  onChange={onMainPhotoSelected}
                />
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            style={{
              width: "250px",
              height: "40px",
              marginLeft: "20px",
              fontSize: "130%",
              marginTop: "20px",
              background: "#4A76A8",
              border: "#4A76A8",
            }}
          >
            Write a message
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{
              width: "45px",
              height: "40px",
              marginLeft: "5px",
              fontSize: "130%",
              marginTop: "20px",
              background: "#e5ebf1",
              border: "#e5ebf1",
            }}
          >
            <i className="fas fa-cog" style={{ color: "#4A76A8" }}></i>
          </button>
          <div className={classes.posts}>
            <MyPostsContainer />
          </div>
        </div>
        <div className={classes.descriptionBlock}>
          <div className={classes.info}>
            <div className={classes.headerinfo}>
              <h2>
                <strong>{props.profile.fullName || "Нет информации"}</strong>
              </h2>
              <i className="far fa-question-circle"></i>
              {props.isOwner ? (
                <ProfileFollowButton
                  followStatus={props.followStatus}
                  userId={props.profile.userId}
                  follow={props.setFollowTrue}
                  unfollow={props.setFollowFalse}
                  fetchStatus={props.fetchStatus}
                />
              ) : null}
            </div>
            <p>online</p>

            <ProfileStatusWithHooks {...props} />
            <hr align="center" width="550" size="3" />
            <h4>Information about me:</h4>
            <li>{props.profile.aboutMe || "Нет информации"} </li>
            <hr />
            <h4>Inforamtion about job:</h4>
            <li>Ищу работу: {props.profile.lookingForAJob ? "да" : "Нет"}</li>
            <li>
              Описание: {props.profile.lookingForAJobDescription || "Нет"}
            </li>
            <hr />
            <h4>Contacts:</h4>
            <li>
              <i className="fab fa-facebook">
                {" "}
                <strong>{props.profile.contacts.facebook || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fas fa-sitemap">
                {" "}
                <strong>{props.profile.contacts.website || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-vk">
                {" "}
                <strong>{props.profile.contacts.vk || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-twitter">
                {" "}
                <strong>{props.profile.contacts.twitter || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-instagram">
                {" "}
                <strong>{props.profile.contacts.instagram || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-youtube">
                {" "}
                <strong>{props.profile.contacts.youtube || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fab fa-github">
                {" "}
                <strong>{props.profile.contacts.github || "Нет"}</strong>
              </i>
            </li>
            <li>
              <i className="fas fa-link">
                {" "}
                <strong>{props.profile.contacts.mainlink || "Нет"}</strong>
              </i>
            </li>
            <hr />
            <h4>Photos:</h4>
            <div className={classes.photos}></div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
