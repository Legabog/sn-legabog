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

  let [volume, volumeH] = useState(0.5);

  const volumeHandler = (e) => {
    let audio = document.getElementById("audio");
    audio.volume = volume;
    volumeH((volume = e.target.value));
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
                ? props.activeTrack.albumCover
                : musicCover
            }
            alt={musicCover}
            onClick={toggleMusicPanel}
          />
          <h1 onClick={toggleMusicPanel}>
            {props.activeTrack !== null
              ? props.activeTrack.title
              : "Not Playing"}
          </h1>
          <div className={classes.controlPanel}>
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
            />
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
                        albumCover:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumCover !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack + 1
                              ].albumCover
                            : props.musicPlayerPlayList.albumCover,
                        album:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumTitle !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack + 1
                              ].albumTitle
                            : props.musicPlayerPlayList.title,
                        author:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].author !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack + 1
                              ].author
                            : props.musicPlayerPlayList.author,
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
            />
          </div>
        </div>
      ) : (
        <div className={cls.join(" ")}>
          <div className={classes.dropDown}>
            <img src={dropDown} alt="dropDown" onClick={toggleMusicPanel} />
          </div>

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

          <div className={classes.controlPanel}>
            <img
              src={previous}
              alt="previous"
              onDoubleClick={() => {
                if (props.activeTrack !== null) {
                  if (props.indexOfPlayingTrack - 1 >= 0) {
                    props.previousTrack(
                      {
                        albumCover:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack - 1
                          ].albumCover !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack - 1
                              ].albumCover
                            : props.musicPlayerPlayList.albumCover,
                        album:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack - 1
                          ].albumTitle !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack - 1
                              ].albumTitle
                            : props.musicPlayerPlayList.title,
                        author:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack - 1
                          ].author !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack - 1
                              ].author
                            : props.musicPlayerPlayList.author,
                        title:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack - 1
                          ].title,
                        trackUrl:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack - 1
                          ].trackUrl,
                      },
                      props.indexOfPlayingTrack - 1
                    );
                  }
                }
              }}
              onClick={() => {
                if (props.activeTrack !== null) {
                  let audio = document.getElementById("audio");
                  audio.currentTime = 0;
                }
              }}
              style={{marginLeft: "130px"}}
            />
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
              style={{marginLeft: "110px"}}
            />
            <img
              style={{marginLeft: "100px"}}
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
                        albumCover:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumCover !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack + 1
                              ].albumCover
                            : props.musicPlayerPlayList.albumCover,
                        album:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].albumTitle !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack + 1
                              ].albumTitle
                            : props.musicPlayerPlayList.title,
                        author:
                          props.musicPlayerPlayList.tracks[
                            props.indexOfPlayingTrack + 1
                          ].author !== undefined
                            ? props.musicPlayerPlayList.tracks[
                                props.indexOfPlayingTrack + 1
                              ].author
                            : props.musicPlayerPlayList.author,
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
            />
          </div>
          {/* <div className={classes.audiotrack}>
            <div className={classes.time}></div>
          </div> */}
          <div className={classes.volume}>
            <input
              id="volumeRange"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onInput={() => {
                let val = volume * 100;
                let volumeRange = document.getElementById("volumeRange");
                volumeRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%,#4A76A8 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
              }}
              onChange={volumeHandler}
            ></input>
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
                albumCover:
                  props.musicPlayerPlayList.tracks[
                    props.indexOfPlayingTrack + 1
                  ].albumCover !== undefined
                    ? props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].albumCover
                    : props.musicPlayerPlayList.albumCover,
                album:
                  props.musicPlayerPlayList.tracks[
                    props.indexOfPlayingTrack + 1
                  ].albumTitle !== undefined
                    ? props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].albumTitle
                    : props.musicPlayerPlayList.title,
                author:
                  props.musicPlayerPlayList.tracks[
                    props.indexOfPlayingTrack + 1
                  ].author !== undefined
                    ? props.musicPlayerPlayList.tracks[
                        props.indexOfPlayingTrack + 1
                      ].author
                    : props.musicPlayerPlayList.author,
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
