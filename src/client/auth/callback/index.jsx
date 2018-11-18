import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import callback from "./callback.css"; // eslint-disable-line

import auth from "../";

class Callback extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    auth.handleAuthentication((err, authResult) => {
      console.log(authResult);
    });
  }

  render() {
    return (
      <div styleName="callback.container">
        <div styleName="callback.lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  null,
  mapDispatchToProps
)(Callback);
