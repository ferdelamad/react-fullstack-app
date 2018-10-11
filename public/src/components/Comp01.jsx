import React from "react";
import { AppContext } from "./Provider";

export const Comp01 = () => (
  <AppContext.Consumer>
    {context => <h1>I'm the {context.state.name01}!</h1>}
  </AppContext.Consumer>
);
