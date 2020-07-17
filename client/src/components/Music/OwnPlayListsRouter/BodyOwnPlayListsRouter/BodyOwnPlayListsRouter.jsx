import React from "react";
import classes from "./BodyOwnPlayListsRouter.module.css";
import DefaultMusic from "../../../../assets/apple theme/music.jpg";
import TracksItem from "./TrackItem/TrackItem";
import { NavLink } from "react-router-dom";

const BodyOwnPlayListsRouter = (props) => {
  return (
    <div className={classes.bodyOwnPlayListsRouter}>
      <div className={classes.playListImage}>
        <img src={props.img || DefaultMusic} alt="description" />
      </div>
      <div className={classes.playListTitle}>
        <h1>{props.title}</h1>
        <h4>{props.description}</h4>
        <div className={classes.playListTracks}>
          {props.tracks.map((e) => (
            <TracksItem
              key={e._id}
              title={e.title}
              author={e.author}
              trackUrl={e.trackUrl}
              id={e._id}
              pid={props.id}
              deleteTrackFromPlayList={props.deleteTrackFromPlayList}
            />
          ))}
        </div>
        <div className={classes.delete}>
          <NavLink to="/music-list/playlists/">
            <i
              className="fas fa-trash"
              onClick={() => {
                props.deleteOwnPlayList(props.id);
              }}
            ></i>
          </NavLink>
        </div>
        <div className={classes.lastBlock}></div>
      </div>
    </div>
  );
};

export default BodyOwnPlayListsRouter;
