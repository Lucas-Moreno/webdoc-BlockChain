import React from "react";
import ReactDOM from "react-dom";
import "./Assets/scss/style.scss";
import Home from "./Components/Home/Home.jsx";
import App from "./App/App";
import About from "./Components/About/About";
import Summary from "./Components/Summary/Summary";
import ChapterOne from "./Components/Chapitres/ChapterOne/ChapterOne";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/a-propos" component={About}></Route>
      <Route exact path="/sommaire" component={Summary}></Route>
      <Route exact path="/chapitre-un" component={ChapterOne}></Route>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
