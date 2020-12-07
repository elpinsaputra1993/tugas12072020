import React, { Component } from "react";
import Component_c from "./Component_c";

class Component_b extends Component {
  //   state = {
  //     comp_b: "",
  //   };

  get_c = (txt) => {
    // this.setState({
    //   comp_b: txt,
    // });
    this.props.event_a(txt);
  };
  //   componentDidMount() {
  //     this.get_c;
  //     // this.props.event_p(this.state.comp_b);
  //   }
  render() {
    return (
      <div className="layer1">
        <h3>Component B</h3>
        {/* <input
          type="hidden"
          id="inp_b"
          onChange={this.props.event_a(this.state.comp_b)}
        /> */}
        <Component_c
          get_c={this.props.get_c}
          eventClick={(val) => this.get_c(val)}
        />
      </div>
    );
  }
  //   render() {
  //     return (
  //       <div className="layer1">
  //         <h3>Component B</h3>
  //         <input type="hidden" id="inp_b" onChange={this.props.eventChange(this.state.comp_b);}/>
  //         <Component_c eventClick={this.get_c} />
  //       </div>
  //     );
  //   }
}

export default Component_b;
