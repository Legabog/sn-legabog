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
import mute from "../../assets/images/icons/music-player-panel/mute.svg";
import volumeicon from "../../assets/images/icons/music-player-panel/volume.svg";
import { useEffect } from "react";
// import shuffle from "../../assets/images/icons/music-player-panel/shuffle.svg";
// import shuffle_active from "../../assets/images/icons/music-player-panel/shuffle_active.svg";
import repeat from "../../assets/images/icons/music-player-panel/repeat.svg";
import repeat_active from "../../assets/images/icons/music-player-panel/repeat_active.svg";
import repeatone_active from "../../assets/images/icons/music-player-panel/repeat-one_active.svg";

const MusicPlayerPanel = (props) => {
  let audio = document.getElementById("audio");

  const [isOpen, switchCondition] = useState(true);

  const toggleMusicPanel = () => {
    switchCondition(!isOpen);
  };

  let [volume, volumeH] = useState(1);

  const volumeHandler = (e) => {
    volumeH((audio.volume = e.target.value));
  };

  let [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const audioTimeHandler = (e) => {
    audioCurrentTime = audio.currentTime;
    setAudioCurrentTime((audio.currentTime = e.target.value));
  };

  // let [shuffleState, toggleShuffleState] = useState(false);

  // const setShuffleState = () => {
  //   toggleShuffleState(!shuffleState);
  // };

  let [repeatState, toggleRepeatState] = useState(0);

  const setRepeatState = () => {
    switch (repeatState) {
      case 0:
        toggleRepeatState(1);
        break;
      case 1:
        toggleRepeatState(2);
        break;
      case 2:
        toggleRepeatState(0);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let audio = document.getElementById("audio");
    setInterval(() => {
      setAudioCurrentTime(audio.currentTime);
    }, 1);
  }, []);

  const calculateTime = (seconds = 0, guide = seconds) => {
    let s = Math.floor(seconds % 60);
    let m = Math.floor((seconds / 60) % 60);
    let h = Math.floor(seconds / 3600);
    const gm = Math.floor((guide / 60) % 60);
    const gh = Math.floor(guide / 3600);

    if (isNaN(seconds) || seconds === Infinity) {
      h = m = s = "-";
    }

    h = h > 0 || gh > 0 ? `${h}:` : "";
    m = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`;
    s = s < 10 ? `0${s}` : s;

    return h + m + s;
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
            <button
              onClick={() => {
                if (props.activeTrack !== null) {
                  if (props.isPlaying) {
                    audio.pause();
                    props.toggleIsPlaying(false);
                  } else {
                    audio.play();
                    props.toggleIsPlaying(true);
                  }
                }
              }}
            >
              <img src={props.isPlaying ? pause : play} alt="playAndPause" />
            </button>

            <button
              disabled={props.disablerButtonNext}
              onClick={() => {
                if (props.activeTrack !== null) {
                  switch (repeatState) {
                    case 0:
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

                      break;
                    case 1:
                      if (
                        props.indexOfPlayingTrack ===
                        props.musicPlayerPlayList.tracks.length - 1
                      ) {
                        props.nextTrack(
                          {
                            albumCover:
                              props.musicPlayerPlayList.tracks[0].albumCover !==
                              undefined
                                ? props.musicPlayerPlayList.tracks[0].albumCover
                                : props.musicPlayerPlayList.albumCover,
                            album:
                              props.musicPlayerPlayList.tracks[0].albumTitle !==
                              undefined
                                ? props.musicPlayerPlayList.tracks[0].albumTitle
                                : props.musicPlayerPlayList.title,
                            author:
                              props.musicPlayerPlayList.tracks[0].author !==
                              undefined
                                ? props.musicPlayerPlayList.tracks[0].author
                                : props.musicPlayerPlayList.author,
                            title: props.musicPlayerPlayList.tracks[0].title,
                            trackUrl:
                              props.musicPlayerPlayList.tracks[0].trackUrl,
                          },
                          0
                        );
                      } else {
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

                      break;
                    case 2:
                      audio.currentTime = 0;
                      audio.play();

                      break;
                    default:
                      break;
                  }
                }
              }}
            >
              <img src={next} alt="next" />
            </button>
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
          <div className={classes.trackBar}>
            <input
              disabled={props.activeTrack !== null ? false : true}
              id="trackBarRange"
              type="range"
              min="0"
              max={isNaN(audio.duration) ? null : audio.duration}
              step="1"
              value={audioCurrentTime}
              style={{
                background: `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
                  (audioCurrentTime / audio.duration) * 100
                }%,#E6E6E6 ${
                  (audioCurrentTime / audio.duration) * 100
                }%, #E6E6E6 100%)`,
              }}
              onInput={() => {
                let trackBarRange = document.getElementById("trackBarRange");

                trackBarRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
                  (audioCurrentTime / audio.duration) * 100
                }%,#E6E6E6 ${
                  (audioCurrentTime / audio.duration) * 100
                }%, #E6E6E6 100%)`;
              }}
              onClick={() => {
                let trackBarRange = document.getElementById("trackBarRange");
                trackBarRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
                  (audioCurrentTime / audio.duration) * 100
                }%,#E6E6E6 ${
                  (audioCurrentTime / audio.duration) * 100
                }%, #E6E6E6 100%)`;
              }}
              onChange={audioTimeHandler}
            />
            <div className={classes.time}>
              <div className={classes.currentTime}>
                <h5>{calculateTime(audioCurrentTime)}</h5>
              </div>
              <div className={classes.timeLeft}>
                <h5>
                  {isNaN(audio.duration)
                    ? "-0:00"
                    : "-" + calculateTime(audio.duration - audioCurrentTime)}
                </h5>
              </div>
            </div>
          </div>
          <div className={classes.controlPanel}>
            <div className={classes.shuffleAndRepeat}>
              {/* <button onClick={setShuffleState}>
                <img
                  src={shuffleState ? shuffle_active : shuffle}
                  alt="shuffle"
                />
              </button> */}
              <button
                disabled={props.activeTrack !== null ? false : true}
                style={{ marginLeft: "515px" }}
                onClick={setRepeatState}
              >
                <img
                  src={
                    repeatState === 0
                      ? repeat
                      : repeatState === 1
                      ? repeat_active
                      : repeatone_active
                  }
                  alt="repeat"
                />
              </button>
            </div>

            <button
              disabled={props.disablerButtonNext}
              style={{ marginLeft: "130px" }}
              onClick={() => {
                if (props.activeTrack !== null) {
                  switch (repeatState) {
                    case 0:
                      if (props.activeTrack !== null && audio.currentTime > 3) {
                        audio.currentTime = 0;
                      } else {
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
                      break;
                    case 1:
                      if (props.activeTrack !== null && audio.currentTime > 3) {
                        audio.currentTime = 0;
                      } else {
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
                      break;
                    case 2:
                      audio.currentTime = 0;
                      audio.play();

                      break;
                    default:
                      break;
                  }
                }
              }}
            >
              <img src={previous} alt="previous" />
            </button>

            <button
              style={{ marginLeft: "110px" }}
              onClick={() => {
                if (props.activeTrack !== null) {
                  if (props.isPlaying) {
                    audio.pause();
                    props.toggleIsPlaying(false);
                  } else {
                    audio.play();
                    props.toggleIsPlaying(true);
                  }
                }
              }}
            >
              <img src={props.isPlaying ? pause : play} alt="playAndPause" />
            </button>

            <button
              disabled={props.disablerButtonNext}
              style={{ marginLeft: "100px" }}
              onClick={() => {
                if (props.activeTrack !== null) {
                  switch (repeatState) {
                    case 0:
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
                      break;
                    case 1:
                      if (
                        props.indexOfPlayingTrack ===
                        props.musicPlayerPlayList.tracks.length - 1
                      ) {
                        props.nextTrack(
                          {
                            albumCover:
                              props.musicPlayerPlayList.tracks[0].albumCover !==
                              undefined
                                ? props.musicPlayerPlayList.tracks[0].albumCover
                                : props.musicPlayerPlayList.albumCover,
                            album:
                              props.musicPlayerPlayList.tracks[0].albumTitle !==
                              undefined
                                ? props.musicPlayerPlayList.tracks[0].albumTitle
                                : props.musicPlayerPlayList.title,
                            author:
                              props.musicPlayerPlayList.tracks[0].author !==
                              undefined
                                ? props.musicPlayerPlayList.tracks[0].author
                                : props.musicPlayerPlayList.author,
                            title: props.musicPlayerPlayList.tracks[0].title,
                            trackUrl:
                              props.musicPlayerPlayList.tracks[0].trackUrl,
                          },
                          0
                        );
                      } else {
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
                      break;
                    case 2:
                      audio.currentTime = 0;
                      audio.play();

                      break;
                    default:
                      break;
                  }
                }
              }}
            >
              <img src={next} alt="next" />
            </button>
          </div>
          <div className={classes.volume}>
            <div className={classes.mute}>
              <img
                src={mute}
                alt="mute"
                onClick={() => {
                  if (props.activeTrack !== null) {
                    volumeH((audio.volume = 0));
                  }
                }}
              />
            </div>

            <input
              disabled={props.activeTrack !== null ? false : true}
              id="volumeRange"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              style={{
                background: `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${
                  volume * 100
                }%,#E6E6E6 ${volume * 100}%, #E6E6E6 100%)`,
              }}
              onInput={() => {
                let val = volume * 100;
                let volumeRange = document.getElementById("volumeRange");
                volumeRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
              }}
              onClick={() => {
                let val = volume * 100;
                let volumeRange = document.getElementById("volumeRange");
                volumeRange.style.background = `-webkit-linear-gradient(left ,#4A76A8 0%, #4A76A8 ${val}%,#E6E6E6 ${val}%, #E6E6E6 100%)`;
              }}
              onChange={volumeHandler}
            />
            <div className={classes.unmute}>
              <img
                src={volumeicon}
                alt="volumeicon"
                onClick={() => {
                  if (props.activeTrack !== null) {
                    volumeH((audio.volume = 1));
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

      {isOpen ? null : <BackDrop onClick={toggleMusicPanel} />}
      <audio
        controls
        id="audio"
        onEnded={() => {
          switch (repeatState) {
            case 0:
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
              break;
            case 1:
              if (
                props.indexOfPlayingTrack ===
                props.musicPlayerPlayList.tracks.length - 1
              ) {
                props.nextTrack(
                  {
                    albumCover:
                      props.musicPlayerPlayList.tracks[0].albumCover !==
                      undefined
                        ? props.musicPlayerPlayList.tracks[0].albumCover
                        : props.musicPlayerPlayList.albumCover,
                    album:
                      props.musicPlayerPlayList.tracks[0].albumTitle !==
                      undefined
                        ? props.musicPlayerPlayList.tracks[0].albumTitle
                        : props.musicPlayerPlayList.title,
                    author:
                      props.musicPlayerPlayList.tracks[0].author !== undefined
                        ? props.musicPlayerPlayList.tracks[0].author
                        : props.musicPlayerPlayList.author,
                    title: props.musicPlayerPlayList.tracks[0].title,
                    trackUrl: props.musicPlayerPlayList.tracks[0].trackUrl,
                  },
                  0
                );
              } else {
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
              break;
            case 2:
              audio.currentTime = 0;
              audio.play();
              break;
            default:
              break;
          }
        }}
      ></audio>
    </React.Fragment>
  );
};

export default MusicPlayerPanel;
