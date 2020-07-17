import React from "react";
import HeaderMusicList from "./HeaderMusicList/HeaderMusicList";
import classes from "./MusicList.module.css";
import BodyMusicList from "./BodyMusicList/BodyMusicList";
import FooterMusicList from "./FooterMusicList/FooterMusicList";
import { connect } from "react-redux";
import {
  toggleSwitcher,
} from "../../../redux/musicalbums-reducer";
import {switchStateOfPlayLists} from "../../../redux/musicalplaylists-reducer"

class MusicList extends React.Component {
  render() {
    return (
      <div className={classes.musicList}>
        <HeaderMusicList />
        <BodyMusicList switchStateOfPlayLists={this.props.switchStateOfPlayLists}/>
        <FooterMusicList
          recentlyPlayed={this.props.recentlyPlayed}
          toggleSwitcher={this.props.toggleSwitcher}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
  };
};

export default connect(mapStateToProps, {
  toggleSwitcher,
  switchStateOfPlayLists
})(MusicList);
