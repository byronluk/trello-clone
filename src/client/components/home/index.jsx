import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../../styles/normalize.css";
import "../../styles/base.css";
import home from "./home.css"; // eslint-disable-line no-unused-vars

import Nav from "../nav";

import auth from "../../auth";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Nav auth={auth} />
        <div styleName="home.container">Boards</div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Home);
