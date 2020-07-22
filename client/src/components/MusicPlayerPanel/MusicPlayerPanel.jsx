import React from "react";
import classes from "./MusicPlayerPanel.module.css";
import musicCover from "../../assets/apple theme/music.jpg";
import play from "../../assets/images/icons/music-player-panel/play.svg";
import next from "../../assets/images/icons/music-player-panel/next.svg";
import pause from "../../assets/images/icons/music-player-panel/pause.svg";
import previous from "../../assets/images/icons/music-player-panel/previous.svg";
import { useState } from "react";
import BackDrop from "../common/BackDrop/BackDrop";
import dropDown from "../../assets/images/icons/music-player-panel/dropdown.svg";

const MusicPlayerPanel = (props) => {
  const [isOpen, switchCondition] = useState(true);

  const toggleMusicPanel = () => {
    switchCondition(!isOpen);
  };

  const cls = [classes.MusicPlayerPanel];

  if (!isOpen) {
    cls.push(classes.close);
  }

  return (
    <React.Fragment>
      {isOpen ? (
        <div className={cls.join(" ")}>
          <img
            src={
              props.musicPlayerPlayList !== null
                ? props.musicPlayerPlayList.albumCover
                : musicCover
            }
            alt={musicCover}
            onClick={toggleMusicPanel}
          ></img>
          <h1 onClick={toggleMusicPanel}>Music Player Panel</h1>
          <div className={classes.controlPanel}>
            <img
              src={previous}
              alt="previous"
              onClick={() => {
                let audio = document.getElementById("audio");
                audio.currentTime = 0;
              }}
            ></img>
            <img
              src={props.isPlaying ? pause : play}
              alt="playAndPause"
              onClick={() => {
                props.isPlaying ? props.pausePlayer() : props.playPlayer();
              }}
            ></img>
            <img src={next} alt="next" onClick={() => {
                let audio = document.getElementById("audio");
              }}></img>
          </div>
        </div>
      ) : (
        <div className={cls.join(" ")}>
          <div className={classes.dropDown}>
            <img src={dropDown} alt="dropDown" onClick={toggleMusicPanel}></img>
          </div>
          <div className={classes.avatar}>
            <img src={musicCover} alt={musicCover}></img>
          </div>
          <div className={classes.description}>
            <div className={classes.songName}>
              <h3>Soung name</h3>
            </div>
            <div className={classes.authorNameAlbumName}>
              <h3>Author - Album Name</h3>
            </div>
          </div>

          <div className={classes.controlPanel}>
            <img src={previous} alt="previous"></img>
            <img src={play} alt="play"></img>
            <img src={next} alt="next"></img>
          </div>
        </div>
      )}

      {isOpen ? null : <BackDrop onClick={toggleMusicPanel} />}
      <audio controls id="audio">
        {props.musicPlayerPlayList !== null
        ? props.musicPlayerPlayList.tracks.map(e => <source key={e._id} src={e.trackUrl}/>)
        : null}
      </audio>
    </React.Fragment>
  );
};

export default MusicPlayerPanel;
