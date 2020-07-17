import React from "react";
import classes from "./BodyArtists.module.css";
import ItemArtists from "./ItemArtists/ItemArtists";

const BodyArtists = (props) => {
  let resultArray = [];

  props.musicAlbums.map((e) => {
    if (!resultArray.includes(e.author)) {
      resultArray.push(e.author);
    }
    return resultArray;
  });

  return (
    <div className={classes.bodyArtists}>
      {resultArray.map((e) => (
        <ItemArtists
          key={Math.random()}
          nameArtist={e}
          tracks={props.musicAlbums.map((e) => e.tracks)}
        />
      ))}

      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyArtists;
