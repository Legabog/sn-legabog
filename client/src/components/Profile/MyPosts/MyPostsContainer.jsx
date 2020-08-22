import React from 'react'
import {
  addPostActionCreator,
  deletePost
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

class MyPostsContainer extends React.Component {
  render() {
    return <MyPosts {...this.props}/>
  }
}
let mapStateToProps = state => {
  return {
    PostsData: state.profileReducer.PostsData,
    newPostText: state.profileReducer.newPostText,
    photoImg: state.profileReducer.profilePhoto
  }
}

export default connect(mapStateToProps, { 
  addPostActionCreator,
  deletePost
})(MyPostsContainer);
