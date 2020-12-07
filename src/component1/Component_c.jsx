import React, { Component } from "react";

class Component_c extends Component {
  state = {
    inp_z: "",
  };
  render() {
    return (
      <div className="layer3">
        <h3>Component C</h3>
        <br />
        <span>Get Value from comp Z : </span>
        <span>
          <input
            type="text"
            readOnly={true}
            id="gcompz"
            value={this.props.get_c}
          />
        </span>
        <hr />
        <span>Set Value to comp Z : </span>
        <span>
          <input
            type="text"
            onChange={(event) => this.setState({ inp_z: event.target.value })}
          />
        </span>
        <span>
          <button
            onClick={(e) => {
              this.props.eventClick(this.state.inp_z);
            }}
          >
            Sent to Component Z
          </button>
        </span>
      </div>
    );
  }
}

export default Component_c;
