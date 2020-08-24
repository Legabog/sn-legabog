import React from "react";
import classes from "./Post.module.css";
import { useState } from "react";
import map_svg from "../../../../assets/images/map.svg";

const Post = (props) => {
  let [likes, likeHandler] = useState(0);

  return (
    <div className={classes.item}>
      <div className={classes.description}>
        <img src={props.photoImg} alt="description" />
        <h6>legabog</h6>
        <div className={classes.date}>
          <p>{props.time} • {props.date}</p>
        </div>
        <div className={classes.deleteIcon}>
          <svg
            onClick={() => {
              props.deletePost(props.index);
            }}
          >
            <use href={map_svg + "#delete_post"} />
          </svg>
        </div>
      </div>

      <div className={classes.likes}>
        <h4>{props.message}</h4>
        <div className={classes.likesCount}>
          <svg
            onClick={() => {
              likeHandler(likes + 1);
            }}
          >
            <use href={map_svg + "#like"} />
          </svg>
          <span>
            <strong> {likes}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
