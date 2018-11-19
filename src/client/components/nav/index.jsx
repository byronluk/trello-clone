import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import nav from "./nav.css"; // eslint-disable-line no-unused-vars
import common from "../../styles/common.css"; // eslint-disable-line no-unused-vars

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.auth.login();
  }

  render() {
    return (
      <header styleName="nav.header common.primary">
        <Link styleName="common.text-white common.text nav.home-link nav.grow" to="/">
          Brello
        </Link>
        <button onClick={this.handleLogin} styleName="nav.log-in-button common.button-outline">
          LOGIN
        </button>
      </header>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  auth: PropTypes.object
};

Nav.defaultProps = {
  location: {
    pathname: ""
  }
};
