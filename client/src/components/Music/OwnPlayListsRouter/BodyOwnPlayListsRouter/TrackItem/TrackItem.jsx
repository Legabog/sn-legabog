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
              window.open(`${props.trackUrl}`, "_blank");
            }}
          >
            <h6>{props.title}</h6>
            <p>{props.author}</p>
          </div>
          <ActionSwitcher
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
