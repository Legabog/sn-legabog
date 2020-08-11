import React from "react";
import classes from "./BodyOwnPlayListsRouter.module.css";
import DefaultMusic from "../../../../assets/apple theme/music.jpg";
import TracksItem from "./TrackItem/TrackItem";
import { NavLink } from "react-router-dom";
import map_svg from "../../../../assets/images/map.svg";

const BodyOwnPlayListsRouter = (props) => {
  return (
    <div className={classes.bodyOwnPlayListsRouter}>
      <div className={classes.playListImage}>
        <img src={props.img || DefaultMusic} alt="description" />
      </div>
      <div className={classes.playListTitle}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <div className={classes.playListTracks}>
          {props.tracks.map((e) => (
            <TracksItem
              key={e._id}
              title={e.title}
              albumTitle={e.albumTitle}
              albumCover={e.albumCover}
              author={e.author}
              trackUrl={e.trackUrl}
              tracks={props.tracks}
              id={e._id}
              pid={props.id}
              deleteTrackFromPlayList={props.deleteTrackFromPlayList}
              playPlayer={props.playPlayer}
              setMusicForPlayer={props.setMusicForPlayer}
              setIndexOfTrack={props.setIndexOfTrack}
              musicPlayerPlayList={props.musicPlayerPlayList}
              indexOfPlayingTrack={props.indexOfPlayingTrack}
              isPlaying={props.isPlaying}
              activeTrack={props.activeTrack}
              disablerButtonPlay={props.disablerButtonPlay}
            />
          ))}
        </div>
        <div className={classes.delete}>
          <NavLink to="/music-list/playlists/">
            <svg
              alt="delete_icon"
              onClick={() => {
                props.deleteOwnPlayList(props.id);
              }}
            >
              <use href={map_svg + "#delete"} />
            </svg>
          </NavLink>
        </div>
        <div className={classes.lastBlock}></div>
      </div>
    </div>
  );
};

export default BodyOwnPlayListsRouter;
