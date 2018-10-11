import React from "react";
import { AppContext } from "./Provider";

export const Comp02 = () => (
  <AppContext.Consumer>
    {context => (
      <div>
        <p>{context.state.name02}</p>
        <p>Test my increment function</p>
        <button onClick={context.incrementCounter}>Increment Counter</button>
        <p>Counter: {context.state.counter}</p>
      </div>
    )}
  </AppContext.Consumer>
);
