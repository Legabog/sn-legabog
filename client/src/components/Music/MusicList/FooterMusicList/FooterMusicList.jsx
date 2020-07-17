import React from "react";
import classes from "./FooterMusicList.module.css";
import FooterItem from "./FooterItem/FooterItem";
import { userAPI } from "../../../../api/api";


const FooterMusicList = (props) => {
  return (
    <div className={classes.footerMusicList}>
      <h1 onClick={() => {
        userAPI.deleteTrack("5f0f0ea8bbc4f63fe8ae5789", "5f0dc7ae3a3e91415893f088")
      }}>Recently played: </h1>
      {props.recentlyPlayed.map((e) => (
        <FooterItem
          key={Math.random()}
          img={e.img}
          title={e.title}
          author={e.author}
          toggleSwitcher={props.toggleSwitcher}
        />
      ))}
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default FooterMusicList;
