import React from "react";
import classes from "./OwnPlayListsRouter.module.css";
import HeaderOwnPlayListsRouter from "./HeaderOwnPlayListsRouter/HeaderOwnPlayListsRouter";
import BodyOwnPlayListsRouter from "./BodyOwnPlayListsRouter/BodyOwnPlayListsRouter";


const OwnPlayListsRouter = (props) => {

  return (
    <div className={classes.ownPlayListsRouter}>
      <HeaderOwnPlayListsRouter />
      <BodyOwnPlayListsRouter
        id={props.id}
        img={props.img}
        title={props.title}
        description={props.description}
        tracks={props.tracks}
        deleteOwnPlayList={props.deleteOwnPlayList}
        deleteTrackFromPlayList={props.deleteTrackFromPlayList}
      />
    </div>
  );
  
};

export default OwnPlayListsRouter;
