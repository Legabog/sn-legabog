import React from "react";
import classes from "./BodyAlbums.module.css";
import AlbumItem from "../AlbumItem/AlbumItem";

const BodyAlbums = (props) => {
  return (
    <div className={classes.bodyAlbumsList}>
      {props.musicAlbums.map((e) => {
        return (
          <AlbumItem
            img={e.albumcoverUrl}
            title={e.title}
            author={e.author}
            toggleSwitcher={props.toggleSwitcher}
            key={e._id}
          />
        );
      })}
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyAlbums;
