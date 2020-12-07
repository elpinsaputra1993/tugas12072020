import React, { Component } from "react";

class Component_z extends Component {
  state = {
    inp_c: "",
  };

  //   defaultProps = { get_z: "" };
  render() {
    return (
      <div className="layer3">
        <h3>Component Z</h3>
        <br />
        <span>Get Value from comp C : </span>
        <span>
          <input
            type="text"
            readOnly={true}
            id="gcompc"
            value={this.props.get_z}
          />
        </span>
        <hr />
        <span>Set Value to comp C : </span>
        <span>
          <input
            type="text"
            onChange={(event) => this.setState({ inp_c: event.target.value })}
          />
        </span>
        <span>
          <button
            onClick={(e) => {
              this.props.eventClick(this.state.inp_c);
            }}
          >
            Sent to Component C
          </button>
        </span>
      </div>
    );
  }
}

export default Component_z;
