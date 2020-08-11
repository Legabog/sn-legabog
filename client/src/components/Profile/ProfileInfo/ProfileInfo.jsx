import React from "react";
import DefaultPhoto from "../../../assets/images/user.png";
import classes from "./ProfileInfo.module.css";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileFollowButton from "./ProfileFollowButton";
import map_svg from "../../../assets/images/map.svg";

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
                    <svg>
                      <use href={map_svg + "#download"} />
                    </svg>
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
              <button aria-label="profile_settings">
                <svg>
                  <use href={map_svg + "#settings"} />
                </svg>
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
              <svg>
                <use href={map_svg + "#info"} />
              </svg>
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
            <h3 style={{ marginBottom: "-20px" }}>Information about me:</h3>
            <ul>
              <li>{props.profile.aboutMe || "Нет информации"} </li>
            </ul>
            <hr />
            <h3 style={{ marginBottom: "-20px" }}>Inforamtion about job:</h3>
            <ul>
              <li>Ищу работу: {props.profile.lookingForAJob ? "да" : "Нет"}</li>
              <li>
                Описание: {props.profile.lookingForAJobDescription || "Нет"}
              </li>
            </ul>
            <hr />

            <h3 style={{ marginBottom: "-20px" }}>Contacts:</h3>
            <div className={classes.Contacts}>
              <ul>
                <li>
                  <svg>
                    <use href={map_svg + "#facebook"} />
                  </svg>
                  <strong> {props.profile.contacts.facebook || "Нет"}</strong>
                </li>
                <li>
                  <svg>
                    <use href={map_svg + "#site"} />
                  </svg>
                  <strong> {props.profile.contacts.website || "Нет"}</strong>
                </li>
                <li>
                  <svg>
                    <use href={map_svg + "#vk"} />
                  </svg>
                  <strong> {props.profile.contacts.vk || "Нет"}</strong>
                </li>
                <li>
                  <svg>
                    <use href={map_svg + "#twitter"} />
                  </svg>

                  <strong> {props.profile.contacts.twitter || "Нет"}</strong>
                </li>
                <li>
                  <svg>
                    <use href={map_svg + "#instagram"} />
                  </svg>
                  <strong> {props.profile.contacts.instagram || "Нет"}</strong>
                </li>
                <li>
                  <svg>
                    <use href={map_svg + "#youtube"} />
                  </svg>
                  <strong> {props.profile.contacts.youtube || "Нет"}</strong>
                </li>
                <li>
                  <svg>
                    <use href={map_svg + "#github"} />
                  </svg>
                  <strong> {props.profile.contacts.github || "Нет"}</strong>
                </li>
                <li>
                  <svg>
                    <use href={map_svg + "#linked"} />
                  </svg>
                  <strong> {props.profile.contacts.mainlink || "Нет"}</strong>
                </li>
              </ul>
              <hr />
            </div>
            <h3>Photos:</h3>
            <div className={classes.photos}></div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
