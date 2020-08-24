import React from "react";
import classes from "./FooterMusicList.module.css";
import FooterItem from "./FooterItem/FooterItem";

const FooterMusicList = React.memo((props) => {

  return (
    <div className={classes.footerMusicList}>
      <h3>Recently played: </h3>
      { props.recentlyPlayed.map((e) => (
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
});

export default FooterMusicList;
