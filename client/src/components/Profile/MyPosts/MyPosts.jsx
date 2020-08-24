import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { useState } from "react";

const MyPosts = React.memo((props) => {
  const [message, setMessage] = useState("");

  const changeHanlder = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={classes.postsBlock}>
      <Header />
      <Body
        {...props}
        message={message}
        setMessage={setMessage}
        changeHanlder={changeHanlder}
      />
      {props.PostsData.map((ell, index) => (
        <Post
          index={index}
          key={ell.id}
          message={ell.message}
          likes={ell.likes}
          date={ell.date}
          time={ell.time}
          {...props}
        />
      ))}
    </div>
  );
});

export default MyPosts;
