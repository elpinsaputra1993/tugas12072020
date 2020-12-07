import React, { Component } from "react";
import Component_b from "./Component_b";

class Component_a extends Component {
  //   state = {
  //     comp_a: "",
  //   };

  get_b = (txt) => {
    // this.setState({
    //   comp_a: txt,
    // });
    this.props.event_p(txt);
  };

  //   componentDidMount() {
  //     this.get_b;
  //     // this.props.event_p(this.state.comp_a);
  //   }
  render() {
    return (
      <div className="layer1">
        <h3>Component A</h3>
        {/* <input
          type="hidden"
          id="inp_b"
          onChange={this.props.event_p(this.state.comp_a)}
        /> */}
        <Component_b
          get_c={this.props.get_c}
          event_a={(val) => this.get_b(val)}
        />
      </div>
    );
  }
  //   render() {
  //     return (
  //       <div className="layer1">
  //         <h3>Component A</h3>
  //         <Component_b />
  //       </div>
  //     );
  //   }
}

export default Component_a;
