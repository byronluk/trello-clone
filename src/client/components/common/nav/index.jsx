import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import nav from "./nav.css"; // eslint-disable-line no-unused-vars
import common from "../../../styles/common.css"; // eslint-disable-line no-unused-vars

// import Auth from "../auth/auth";
// const auth = new Auth();

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header styleName="nav.header common.color-primary">
        <Link styleName="common.text-white common.text nav.home-link" to="/">
          Brello
        </Link>
      </header>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

Nav.defaultProps = {
  location: {
    pathname: ""
  }
};
