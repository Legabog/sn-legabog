import React from "react";
import classes from "./TrackItem.module.css";
import { ActionSwitcher } from "./ActionSwitcher/ActionSwitcher";
import { useEffect } from "react";

const TracksItem = (props) => {
  useEffect(() => {
    const audio = document.getElementById("audio");
    if (props.activeTrack !== null) {
      if (props.isPlaying) {
        if (audio.currentTime === 0) {
          audio.src = props.activeTrack.trackUrl;
          audio.currentTime = 0;
          audio.play();
        }
        if (audio.src !== props.activeTrack.trackUrl) {
          audio.src = props.activeTrack.trackUrl;
          audio.currentTime = 0;
          audio.play();
        } else {
          audio.play();
        }
      } else {
        audio.pause();
      }
    } else {
    }
  });

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

                  //-------------------Set music for player
                  //-------------------- Set index of active(playing) track
                  let SearchElement = e.title;
                  let index = props.tracks.findIndex(
                    (e) => e.title === SearchElement
                  );

                  props.playPlayer(
                    {
                      album: props.title,
                      author: props.author,
                      title: e.title,
                      trackUrl: e.trackUrl,
                    },
                    {
                      author: props.author,
                      title: props.title,
                      albumCover: props.img,
                      tracks: props.tracks,
                    },
                    index
                  );
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
