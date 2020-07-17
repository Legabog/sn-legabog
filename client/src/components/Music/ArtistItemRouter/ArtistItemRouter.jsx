import React from "react";
import classes from "./ArtistItemRouter.module.css";
import HeaderArtistItemRouter from "./HeaderArtistItemRouter/HeaderArtistItemRouter";
import BodyArtistItemRouter from "./BodyArtistItemRouter/BodyArtistItemRouter";
import { connect } from "react-redux";

const ArtistItemRouter = (props) => {
  return (
    <div className={classes.artistItemRouter}>
      <HeaderArtistItemRouter nameArtist={props.nameArtist} />
      <BodyArtistItemRouter
        nameArtist={props.nameArtist}
        musicAlbums={props.musicAlbums}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
  };
};

export default connect(mapStateToProps, {})(ArtistItemRouter);
