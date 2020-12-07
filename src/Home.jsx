import React, { Component } from "react";
import "./Home.css";
import Component_a from "./component1/Component_a";
import Component_x from "./component2/Component_x";

class Home extends Component {
  state = {
    com_z: "",
    com_c: "",
  };

  set_z(text) {
    if (text == "") {
      alert("Value set Component Z tidak boleh kosong");
      return false;
    }

    // alert(text);
    this.setState({
      com_z: text,
    });
  }
  set_c(text) {
    if (text == "") {
      alert("Value set Component C tidak boleh kosong");
      return false;
    }

    // alert(text);
    this.setState({
      com_c: text,
    });
  }
  render() {
    return (
      <div id="layer">
        <div>
          <Component_a
            get_c={this.state.com_c}
            event_p={(value) => this.set_z(value)}
          />
        </div>
        <div>
          <Component_x
            get_z={this.state.com_z}
            event_p={(value) => this.set_c(value)}
          />
        </div>
      </div>
    );
    // return (
    //   <div id="layer">
    //     <div>
    //       <Component_a />
    //     </div>
    //     <div>
    //       <Component_x />
    //     </div>
    //   </div>

    // );
  }
}

export default Home;
