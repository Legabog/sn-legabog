import React from "react";
import classes from "./BodyMusicPlayer.module.css";
import DefaultMusic from "../../../../assets/apple theme/music.jpg";
import TracksItem from "./TrackItem/TrackItem";

const BodyMusicPlayer = (props) => {
  return (
    <div className={classes.bodyMusicPlayer}>
      <div className={classes.trackImage}>
        <img
          src={props.img || DefaultMusic}
          alt="description"
        />
      </div>
      <div className={classes.trackArtist}>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>

        {props.musicAlbums.map((e) => {
          if (e.title === props.title && e.author === props.author) {
            return (
              <TracksItem
                key={Math.random()}
                tracks={e.tracks}
                {...props}
              />
            );
          }
          return null;
        })}
      </div>
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyMusicPlayer;
