import React from "react";
import classes from "./TrackItem.module.css";
import { ActionSwitcher } from "./ActionSwitcher/ActionSwitcher";

const TracksItem = (props) => {
  return (
    <div className={classes.tracks}>
      <div className={classes.item}>
        <div className={classes.description}>
          <div
            className={classes.titleAndAuthor}
            onClick={() => {
              let SearchElement = props.title;
              let index = props.tracks.findIndex(
                (e) => e.title === SearchElement
              );

              if (!props.disablerButtonPlay) {
                props.playPlayer(
                  {
                    albumCover: props.albumCover,
                    album: props.albumTitle,
                    author: props.author,
                    title: props.title,
                    trackUrl: props.trackUrl,
                  },
                  {
                    author: props.author,
                    title: props.albumTitle,
                    albumCover: props.albumCover,
                    tracks: props.tracks,
                  },
                  index
                );
              }
            }}
          >
            <h2>{props.title}</h2>
            <p>{props.author}</p>
          </div>
          <ActionSwitcher
            albumCover={props.albumCover}
            title={props.title}
            author={props.author}
            id={props.id}
            pid={props.pid}
            deleteTrackFromPlayList={props.deleteTrackFromPlayList}
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TracksItem;
