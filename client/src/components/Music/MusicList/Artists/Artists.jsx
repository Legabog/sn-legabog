import React from "react";
import classes from "./Artists.module.css";
import HeaderArtists from "./HeaderArtists/HeaderArtists";
import BodyArtists from "./BodyArtists/BodyArtists";
import { connect } from "react-redux";

const ArtistsList = (props) => {
  return (
    <div className={classes.artists}>
      <HeaderArtists />
      <BodyArtists musicAlbums={props.musicAlbums} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
  };
};

export default connect(mapStateToProps, {})(ArtistsList);
