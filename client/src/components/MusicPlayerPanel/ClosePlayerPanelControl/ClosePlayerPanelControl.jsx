import React from "react";
import map_svg from "../../../assets/images/map.svg";
import classes from "../MusicPlayerPanel.module.css";

const ClosePlayerPanelControl = (props) => {
  let audio = document.getElementById("audio");

  return (
    <React.Fragment>
      <div className={classes.controlPanel}>
        <button
          disabled={props.disablerButtonNext}
          style={{ marginLeft: "130px" }}
          onClick={() => {
            if (props.activeTrack !== null) {
              switch (props.repeatState) {
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
          <svg>
            <use href={map_svg + "#previous"} />
          </svg>
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
          <svg>
            <use
              href={props.isPlaying ? map_svg + "#pause" : map_svg + "#play"}
            />
          </svg>
        </button>

        <button
          disabled={props.disablerButtonNext}
          style={{ marginLeft: "100px" }}
          onClick={() => {
            if (props.activeTrack !== null) {
              switch (props.repeatState) {
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
            }
          }}
        >
          <svg>
            <use href={map_svg + "#next"} />
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
};

export default ClosePlayerPanelControl;
