import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfile,
  getProfileStatus,
  getCaptcha,
  updateProfileStatus,
  changeStatusHandler,
  savePhoto,
  getFollowStatus,
  setFollowTrue,
  setFollowFalse,
} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 7341;
    }
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
    this.props.getFollowStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props} isOwner={!!this.props.match.params.userId} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.profileStatus,
  authrizedUserId: state.authReducer.userId,
  isAuth: state.authReducer.isAuth,
  captcha: state.profileReducer.captcha,
  followStatus: state.profileReducer.followStatus,
  fetchStatus: state.profileReducer.fetchStatus
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
    changeStatusHandler,
    getCaptcha,
    savePhoto,
    getFollowStatus,
    setFollowTrue,
    setFollowFalse,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
