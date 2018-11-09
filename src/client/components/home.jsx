import "styles/normalize.css";
import "styles/base.css";
import home from "../styles/home.css";

import React from "react";
import { connect } from "react-redux";
import { Nav } from "./nav";

import Typography from "@material-ui/core/Typography";

console.log("hello: ", process.env.HELLO);

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav {...this.props} />
        <div className={home.container}>

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
