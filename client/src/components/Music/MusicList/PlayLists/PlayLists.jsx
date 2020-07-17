import React from "react";
import classes from "./PlayLists.module.css";
import HeaderPlayLists from "./HeaderPlayLists/HeaderPlayLists";
import BodyPlayLists from "./BodyPlayLists/BodyPlayLists";
import { connect } from "react-redux";
import {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
} from "../../../../redux/musicalplaylists-reducer";
import { useEffect } from "react";

const PlayLists = (props) => {
  getMyOwnPlayLists();

  useEffect(() => {}, [props.ownPlayLists]);

  return (
    <div className={classes.playLists}>
      <HeaderPlayLists
        switchStateOfPlayLists={props.switchStateOfPlayLists}
        playListSwitcher={props.playListSwitcher}
        tempTrack={props.tempTrack}
      />
      <BodyPlayLists {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
    tempTrack: state.musicPlayListReducer.tempTrack,
    playListSwitcher: state.musicPlayListReducer.playListSwitcher,
    fetch: state.musicPlayListReducer.fetch
  };
};

export default connect(mapStateToProps, {
  addTrackToPlayList,
  switchStateOfPlayLists,
  getMyOwnPlayLists,
  updatePlaylist,
})(PlayLists);
