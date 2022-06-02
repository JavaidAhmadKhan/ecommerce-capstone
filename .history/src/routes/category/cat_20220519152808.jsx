import { Component } from "react";

class Cat extends Component {
  super() {
    constructor();
    this.state = {
      name: "javaid",
      age: [],
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Cat;
