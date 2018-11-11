import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../styles/nav.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// import Auth from "../auth/auth";
// const auth = new Auth();

export class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar styleName="container" position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" styleName="grow">
            <Link to="/" styleName="homeLink">
              Brello
            </Link>
          </Typography>
          {/*<Button onClick={() => auth.login()} color="inherit">Login</Button>*/}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
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
