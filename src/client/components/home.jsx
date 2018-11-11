// import "../styles/normalize.css";
// import "../styles/base.css";
import "../styles/home.css";

import React from "react";
import { connect } from "react-redux";
import { Nav } from "./nav";

import Typography from "@material-ui/core/Typography";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav {...this.props} />
        <div styleName="container">

          <Typography variant="h4" color="textPrimary">Boards</Typography>
        </div>
      </div>
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
