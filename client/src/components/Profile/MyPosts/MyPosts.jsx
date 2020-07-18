import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { AddMyPostFormRedux } from "./AddMyPostRedux";
import discussions from "../../../assets/images/icons/discussions.svg";

const MyPosts = (props) => {
  let PostsElements = props.PostsData.map((ell) => (
    <Post key={ell.id} message={ell.message} likes={ell.likes} {...props} />
  ));

  const AddMyPost = (values) => {
    props.addPostActionCreator(values.addMyPostForm);
  };

  return (
    <div className={classes.postsBlock}>
      <div className={classes.header}>
        <img src={discussions} alt="discussions"></img>
        <h2>Posts</h2>
      </div>

      <div className={classes.inputMessage}>
        <AddMyPostFormRedux onSubmit={AddMyPost} />
      </div>
      <div className={classes.posts}>{PostsElements}</div>
    </div>
  );
};

export default MyPosts;
