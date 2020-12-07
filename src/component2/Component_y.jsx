import React, { Component } from "react";
import Component_z from "./Component_z";

class Component_y extends Component {
  get_z = (txt) => {
    // this.setState({
    //   comp_b: txt,
    // });
    this.props.event_x(txt);
  };
  render() {
    return (
      <div className="layer1">
        <h3>Component Y</h3>
        <Component_z
          get_z={this.props.get_z}
          eventClick={(val) => this.get_z(val)}
        />
      </div>
    );
  }
}

export default Component_y;
