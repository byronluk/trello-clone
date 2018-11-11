import "../../styles/normalize.css";
import "../../styles/base.css";
import home from "./home.css"; // eslint-disable-line no-unused-vars

import React from "react";
import { connect } from "react-redux";

import Nav from "../common/nav";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Nav {...this.props} />
        <div styleName="home.container">
          Boards
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Home);
