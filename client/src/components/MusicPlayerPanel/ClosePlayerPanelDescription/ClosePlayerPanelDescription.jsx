import React from "react";
import musicCover from "../../../assets/apple theme/music.jpg";
import classes from "../MusicPlayerPanel.module.css"

const ClosePlayerPanelDescription = (props) => {
  return (
    <React.Fragment>
      {props.isPlaying ? (
        <div className={classes.avatarIsPlaying}>
          <img
            src={
              props.activeTrack !== null
                ? props.activeTrack.albumCover
                : musicCover
            }
            alt={musicCover}
          />
        </div>
      ) : (
        <div className={classes.avatar}>
          <img
            src={
              props.activeTrack !== null
                ? props.activeTrack.albumCover
                : musicCover
            }
            alt={musicCover}
          />
        </div>
      )}
      <div className={classes.description}>
        <div className={classes.songName}>
          <h3>
            {props.activeTrack !== null
              ? props.activeTrack.title
              : "Not Playing"}
          </h3>
        </div>
        <div className={classes.authorNameAlbumName}>
          <h3>
            {props.activeTrack !== null
              ? props.activeTrack.author + " - " + props.activeTrack.album
              : ""}
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClosePlayerPanelDescription;
