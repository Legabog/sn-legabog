import React from "react";
import classes from "./TrackItem.module.css";
import { ActionSwitcher } from "./ActionSwitcher/ActionSwitcher";

const TracksItem = (props) => {
  console.log(props)
  return (
    <div className={classes.tracks}>
      {props.tracks.map((e) => {
        return (
          <div key={e._id} className={classes.item}>
            <div className={classes.description}>
              <h2
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
                  props.setMusicForPlayer({
                    "author" : props.author,
                    "title" : props.title,
                    "albumCover": props.img,
                    "tracks": props.tracks
                  })
                  props.playPlayer()
                }}
              >
                {e.title}
              </h2>
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
