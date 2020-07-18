import React from "react";
import classes from "./Post.module.css";
import { useState } from "react";
import like from "../../../../assets/images/icons/like.svg";

const Post = (props) => {
  let [likes, likeHandler] = useState(0);

  return (
    <div className={classes.item}>
      <div className={classes.description}>
        <img src={props.photoImg} alt="description" />
        <h6>legabog</h6>
      </div>

      <div className={classes.likes}>
        <h4>{props.message}</h4>
        <div className={classes.likesCount}>
          <img
            src={like}
            alt="like"
            onClick={() => {
              likeHandler(likes + 1);
            }}
          ></img>
          <span>
            <strong> {likes}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
