import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class SettingsContainer extends React.Component {
  render() {
    return <Settings {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.settingsReducer.countries,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {})
)(SettingsContainer);
