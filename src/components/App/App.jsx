import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "../../views/Home/Home";
import Add from "../../views/Add/Add";
import Edit from "../../views/Edit/Edit";
const App = () => {
  return;
  <HashRouter>
    <Switch>
      <Route path="/" children={<Home/>}/>
      <Route path="/" children={<Home/>}/>
      <Route path="/" children={<Home/>}/>
    </Switch>
  </HashRouter>;
};
export default App;
