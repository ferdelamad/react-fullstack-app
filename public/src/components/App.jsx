import React, { Component } from "react";
import Provider from "./Provider";
import { Comp01 } from "./Comp01";
import { Comp02 } from "./Comp02";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <h1>I am APP!</h1>
          <Comp01 />
          <Comp02 />
        </div>
      </Provider>
    );
  }
}
