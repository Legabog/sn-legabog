import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  Follow,
  unFollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader.jsx";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { 
  getTotalUsersCount,
  getPageSize,
  getCurrentpage, 
  getIsFetching, 
  getFollowingInProgress,
  getUsersSuper
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    return this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersReducer.users,
//     pageSize: state.usersReducer.pageSize,
//     totalUsersCount: state.usersReducer.totalUsersCount,
//     currentPage: state.usersReducer.currentPage,
//     isFetching: state.usersReducer.isFetching,
//     followingInProgress: state.usersReducer.followingInProgress,
//   };
// };

const mapStateToProps = (state) => {
  return {
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentpage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    Follow,
    unFollow,
  })
)(UsersContainer);
