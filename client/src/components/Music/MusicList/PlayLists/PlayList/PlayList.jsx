import React from "react";
import classes from "./PlayList.module.css";
import { NavLink } from "react-router-dom";

const PlayList = (props) => {
  return (
    <>
      {props.playListSwitcher ? (
        <>
          <NavLink
            to={`/music-player/${props.tempTrack.author}/${props.tempTrack.albumTitle}`}
          >
            <div
              className={classes.playList}
              onClick={() => {
                let i = 0;

                props.tracks.map((e) => {
                  if (
                    (e.title === props.tempTrack.title) &
                    (e.author === props.tempTrack.author)
                  ) {
                    i += 1;
                  }

                  return i;
                });

                if (i === 0) {
                  let payload = [...props.tracks, props.tempTrack];

                  props.updatePlaylist(props.id, {
                    tracks: payload,
                  });
                }
              }}
            >
              <img src={props.img} alt="description" />
              <div className={classes.description}>
                <h3>{props.name}</h3>
              </div>
              <i className="fas fa-chevron-right"></i>

              <hr />
            </div>
          </NavLink>
        </>
      ) : (
        <NavLink to={`/music-playlists/${props.name}/`}>
          <div className={classes.playList}>
            <img src={props.img} alt="description" />
            <div className={classes.description}>
              <h3>{props.name}</h3>
            </div>
            <i className="fas fa-chevron-right"></i>
            <hr />
          </div>
        </NavLink>
      )}
    </>
  );
};

export default PlayList;
