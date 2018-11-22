import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import callback from "./callback.css"; // eslint-disable-line

import { initAuth } from "../../actions/auth";
import auth from "../";

class Callback extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // TODO: throw error page if this component is loaded w/o url params
    auth.handleAuthentication((err, authResult) => {
      if (err) {
        // TODO: handle errors with error page
        console.error(err); // eslint-disable-line
      }
      auth.setSession(authResult);
      this.props.initAuth(authResult);
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

Callback.propTypes = {
  initAuth: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    initAuth: authResult => dispatch(initAuth(authResult))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Callback);
