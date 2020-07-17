import React from "react";
import classes from "./TrackItem.module.css";
import { ActionSwitcher } from "./ActionSwitcher/ActionSwitcher";

const TracksItem = (props) => {
  return (
    <div className={classes.tracks}>
      {props.tracks.map((e) => {
        return (
          <div key={e._id} className={classes.item}>
            <div className={classes.description}>
              <h6
                onClick={() => {
                  if (
                    props.disabledAuthors.includes(props.author) &&
                    props.disabledTitles.includes(props.title)
                  ) {
                  } else {
                    props.pushToRecentlyPlayed(
                      props.img,
                      props.title,
                      props.author
                    );                    
                  }

                  window.open(`${e.trackUrl}`, "_blank")
                }}
              >
                {e.title}
              </h6>
              <ActionSwitcher
                switchStateOfPlayLists={props.switchStateOfPlayLists}
                addTrackToPlayList={props.addTrackToPlayList}
                title={e.title}
                albumTitle={props.title}
                author={props.author}
                trackUrl={e.trackUrl}
              />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default TracksItem;
