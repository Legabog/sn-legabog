import React from 'react'
import {
  addPostActionCreator,
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
  }
}

export default connect(mapStateToProps, { 
  addPostActionCreator,
})(MyPostsContainer);
