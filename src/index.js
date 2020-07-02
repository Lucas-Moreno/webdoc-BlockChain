import React from "react";
import ReactDOM from "react-dom";
import "./Assets/scss/style.scss";
import Home from "./Components/Home/Home.jsx";
import App from "./App/App";
import NotFound from "./Components/Notfound/Notfound";
import Apropos from "./Components/Apropos/Apropos";
import Sommaire from "./Components/Sommaire/Sommaire";
import ChapterOne from "./Components/Chapitres/ChapterOne"
import ChapterTwo from './Components/Chapitres/ChapterTwo';
import ChapterThree from './Components/Chapitres/ChapterThree';

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/apropos" component={Apropos}></Route>
      <Route exact path="/sommaire" component={Sommaire}></Route>
      <Route exact path="/chapitre-un" component={ChapterOne}></Route>
      <Route exact path="/chapitre-deux" component={ChapterTwo}></Route>
      <Route exact path="/chapitre-trois" component={ChapterThree}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
