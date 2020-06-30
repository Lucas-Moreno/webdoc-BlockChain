import React from "react";
import ReactDOM from "react-dom";
import "./Assets/scss/style.scss";
import Home from "./Components/Home/Home";
import App from "./App/App";
import NotFound from "./Components/Notfound/Notfound";
import Apropos from "./Components/Apropos/Apropos";
import Sommaire from "./Components/Sommaire/Sommaire";
import Doc from "./Components/Doc/Doc";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/apropos" component={Apropos}></Route>
      <Route exact path="/sommaire" component={Sommaire}></Route>
      <Route exact path="/doc" component={Doc}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
