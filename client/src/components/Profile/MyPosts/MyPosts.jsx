import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddMyPostFormRedux} from "./AddMyPostRedux"

const MyPosts = (props) => {
  let PostsElements = props.PostsData.map((ell) => (
    <Post key={ell.id} message={ell.message} likes={ell.likes} {...props}/>
  ));

  const AddMyPost = (values) => {
    props.addPostActionCreator(values.addMyPostForm, );
  };

  return (
    <div className={classes.postsBlock}>
      <h2>Posts</h2>
      <div className={classes.inputMessage}>
        <AddMyPostFormRedux onSubmit={AddMyPost}/>
      </div>
      <div className={classes.posts}>{PostsElements }</div>
    </div>
  );
};



export default MyPosts;
