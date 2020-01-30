import React from "react";
import { css } from "@emotion/core";

import { ClockLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <ClockLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#019e83"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent


