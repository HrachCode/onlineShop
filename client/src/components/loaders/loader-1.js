import React from "react";
import { css } from "@emotion/core";
// First way to import
import { ClockLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size
// import ClipLoader from "react-spinners/ClipLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
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


// BarLoader		4	100		
// BeatLoader	15				2
// BounceLoader	60				
// CircleLoader	50				
// ClimbingBoxLoader	15				
// ClipLoader	35				
// ClockLoader	50				
// DotLoader	60				2
// FadeLoader		15	5	2	2
// GridLoader	15				
// HashLoader	50				2
// MoonLoader	60				2
// PacmanLoader	25				2
// PropagateLoader	15				
// PulseLoader	15				2
// RingLoader	60				2
// RiseLoader	15				2
// RotateLoader	15				2
// ScaleLoader		35	4	2	2
// SyncLoader	15				2