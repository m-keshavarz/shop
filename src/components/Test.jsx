import React from "react";

import { withRouter } from "react-router-dom";

class Test extends React.Component {
  render() {
    console.log(this.props.match);
    return "hi";
  }
}

export default withRouter(Test);
