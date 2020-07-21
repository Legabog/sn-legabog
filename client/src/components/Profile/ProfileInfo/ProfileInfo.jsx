import React from "react";
import DefaultPhoto from "../../../assets/images/user.png";
import classes from "./ProfileInfo.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileFollowButton from "./ProfileFollowButton";
import download from "../../../assets/images/icons/download.svg";
import settings from "../../../assets/images/icons/navbar/settings.svg";
import info from "../../../assets/images/icons/info.svg";
import facebook from "../../../assets/images/icons/facebook.svg";
import site from "../../../assets/images/icons/site.svg";
import vk from "../../../assets/images/icons/vk.svg";
import twitter from "../../../assets/images/icons/twitter.svg";
import instagram from "../../../assets/images/icons/instagram.svg";
import youtube from "../../../assets/images/icons/youtube.svg";
import github from "../../../assets/images/icons/github.svg";
import linked from "../../../assets/images/icons/linked.svg";

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

          <div className={classes.frontButtons}>
            <div className={classes.buttonWriteMessage}>
              <button>Write a message</button>
            </div>
            <div className={classes.buttonSettings}>
              <button>
                <img src={settings} alt="settings"></img>
              </button>
            </div>
          </div> 

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
              <img src={info} alt="info"></img>
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
            <div>
              <p>online</p>
            </div>

            <ProfileStatusWithHooks {...props} />
            <hr align="center" />
            <h4>Information about me:</h4>
            <li style={{ marginTop: "-20px" }}>
              {props.profile.aboutMe || "Нет информации"}{" "}
            </li>
            <hr />
            <h4>Inforamtion about job:</h4>
            <li style={{ marginTop: "-20px" }}>
              Ищу работу: {props.profile.lookingForAJob ? "да" : "Нет"}
            </li>
            <li>
              Описание: {props.profile.lookingForAJobDescription || "Нет"}
            </li>
            <hr />

            <h4>Contacts:</h4>
            <div className={classes.Contacts}>
              <ul>
              <li>
                <img
                  src={facebook}
                  alt="facebook"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.facebook || "Нет"}</strong>
              </li>
              <li>
                <img
                  src={site}
                  alt="site"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.website || "Нет"}</strong>
              </li>
              <li>
                <img
                  src={vk}
                  alt="vk"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.vk || "Нет"}</strong>
              </li>
              <li>
                <img
                  src={twitter}
                  alt="twitter"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.twitter || "Нет"}</strong>
              </li>
              <li>
                <img
                  src={instagram}
                  alt="instagram"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.instagram || "Нет"}</strong>
              </li>
              <li>
                <img
                  src={youtube}
                  alt="youtube"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.youtube || "Нет"}</strong>
              </li>
              <li>
                <img
                  src={github}
                  alt="github"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.github || "Нет"}</strong>
              </li>
              <li>
                <img
                  src={linked}
                  alt="linked"
                  style={{ width: "30px", marginBottom: "-5px" }}
                ></img>
                <strong> {props.profile.contacts.mainlink || "Нет"}</strong>
              </li>
              </ul>
              <hr />
            </div>
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
