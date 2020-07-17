import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { toggleNotify } from "../../redux/header-reducer"

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
  email: state.authReducer.email,
  userId: state.authReducer.userId,
  avatar: state.profileReducer.profilePhoto
});

export default connect(mapStateToProps, { 
  toggleNotify,
  logout })(HeaderContainer);
