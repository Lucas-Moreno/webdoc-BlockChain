import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import NotFound from "./Components/Notfound/Notfound";
import './Assets/css/main.css';
import './Assets/js/global.js';

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById("root"));
