import React, { Component } from "react";
//create a new context for our React APP
//export the context to available anywhere in our App.
export const AppContext = React.createContext();
//create a provider component to provide all of the context to our App
export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name01: "I'm the First Component!",
      name02: "I'm the Second Component!"
    };
  }

  render() {
    const state = this.state;
    return (
      <AppContext.Provider value={{ state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
