import { Component } from "react";

class Cat extends Component {
  super() {
    constructor();
    this.state = {
      name: "",
      age: [],
    };
  }

  render() {
      return (
          <div>
              <h1>{this.state.name}</h1>
          </div>
      )
  }

}
