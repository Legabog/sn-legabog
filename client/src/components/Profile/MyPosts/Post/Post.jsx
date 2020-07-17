import React from "react";
import classes from "./Post.module.css";
import { useState } from "react";

const Post = (props) => {
  let [likes, likeHandler] = useState(0);

  return (
    <div className={classes.item}>
      <div className={classes.description}>
        <img src="https://s01.geekpic.net/di-JX2ZZP.jpeg" alt="description" />
        <h6>legabog</h6>
      </div>

      <div className={classes.likes}>
        <h4>{props.message}</h4>
        <div className={classes.likesCount}>
          <i
            className="fas fa-heart"
            onClick={() => {
              likeHandler(likes + 1);
            }}
          ></i>
          <span>
            <strong> {likes}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
