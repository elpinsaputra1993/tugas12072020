import React, { Component } from "react";
import Component_y from "./Component_y";

class Component_x extends Component {
  get_y = (txt) => {
    // this.setState({
    //   comp_a: txt,
    // });
    this.props.event_p(txt);
  };
  render() {
    return (
      <div className="layer1">
        <h3>Component X</h3>
        <Component_y
          get_z={this.props.get_z}
          event_x={(val) => this.get_y(val)}
        />
      </div>
    );
  }
}

export default Component_x;
