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
              props.activeTrack !== null
                ? props.musicPlayerPlayList.albumCover
                : musicCover
            }
            alt={musicCover}
            onClick={toggleMusicPanel}
          ></img>
          <h1 onClick={toggleMusicPanel}>
            {props.activeTrack !== null
              ? props.activeTrack.title + " - " + props.activeTrack.author
              : "Music Player Panel"}
          </h1>
          <div className={classes.controlPanel}>
            <img
              src={previous}
              alt="previous"
              onClick={() => {
                if (props.activeTrack !== null) {
                  let audio = document.getElementById("audio");
                  audio.currentTime = 0;
                }
              }}
            ></img>
            <img
              src={props.isPlaying ? pause : play}
              alt="playAndPause"
              onClick={() => {
                if (props.activeTrack !== null) {
                  let audio = document.getElementById("audio");

                  if (props.isPlaying) {
                    audio.pause();
                    props.toggleIsPlaying(false);
                  } else {
                    audio.play();
                    props.toggleIsPlaying(true);
                  }
                }
              }}
            ></img>
            <img
              src={next}
              alt="next"
              onClick={() => {
                if (props.activeTrack !== null) {
                  if (
                    props.indexOfPlayingTrack + 1 <
                    props.musicPlayerPlayList.tracks.length
                  ) {
                    props.nextTrack(
                      {
                        album: props.musicPlayerPlayList.title,
                        author: props.musicPlayerPlayList.author,
                        title:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].title,
                        trackUrl:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].trackUrl,
                      },
                      props.indexOfPlayingTrack + 1
                    );
                  }
                }
              }}
            ></img>
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
      <audio
        controls
        id="audio"
        onEnded={() => {
          if (
            props.indexOfPlayingTrack + 1 <
            props.musicPlayerPlayList.tracks.length
          ) {
            props.nextTrack(
              {
                album: props.musicPlayerPlayList.title,
                author: props.musicPlayerPlayList.author,
                title:
                  props.musicPlayerPlayList.tracks[
                    props.indexOfPlayingTrack + 1
                  ].title,
                trackUrl:
                  props.musicPlayerPlayList.tracks[
                    props.indexOfPlayingTrack + 1
                  ].trackUrl,
              },
              props.indexOfPlayingTrack + 1
            );
          }
        }}
      ></audio>
    </React.Fragment>
  );
};

export default MusicPlayerPanel;
