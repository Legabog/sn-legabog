import React from "react";
import musicCover from "../../../assets/apple theme/music.jpg";

const OpenPlayerPanelDescription = (props) => {
  return (
    <React.Fragment>
      <img
        src={
          props.activeTrack !== null ? props.activeTrack.albumCover : musicCover
        }
        alt={musicCover}
        onClick={props.toggleMusicPanel}
      />
      <h1 onClick={props.toggleMusicPanel}>
        {props.activeTrack !== null ? props.activeTrack.title : "Not Playing"}
      </h1>
    </React.Fragment>
  );
};

export default OpenPlayerPanelDescription;
