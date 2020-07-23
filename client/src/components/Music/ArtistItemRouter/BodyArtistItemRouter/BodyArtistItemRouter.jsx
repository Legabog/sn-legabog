import React from "react";
import classes from "./BodyArtistItemRouter.module.css";
import ArtistItem from "./ArtistItem/ArtistItem";

const BodyArtistItemRouter = (props) => {
  return (
    <div className={classes.bodyArtistItemRouter}>
      {props.musicAlbums.map((e) => {
        if (e.author === props.nameArtist) {
          return (
            <ArtistItem
              key={Math.random()}
              author={e.author}
              img={e.albumcoverUrl}
              title={e.title}
            />
          );
        }
        return null
      })}
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyArtistItemRouter;
