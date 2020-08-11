import React from "react";
import classes from "./BodyMusicList.module.css";
import BodyMusicListItem from "./BodyMusicListItem/BodyMusicListItem";

const BodyMusicList = (props) => {
  return (
    <div className={classes.bodyMusicList}>
      <BodyMusicListItem title={"Artists"} link={"artists"} />
      <BodyMusicListItem title={"Albums"} link={"albums"} />
      <div
        onClick={() => {
          props.switchStateOfPlayLists(false);
        }}
      >
        <BodyMusicListItem title={"Playlists"} link={"playlists"} />
      </div>
    </div>
  );
};

export default BodyMusicList;
