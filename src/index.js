import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./Components/App";
import Login from "./Components/Main/Autentificare/Login.js";
import JV from "./Components/Main/Produse/JV/JV.js";
import { Header } from "./Components/Layouts";
const Root = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Login} path="/login" />
        <Route component={JV} path="/jv" />
      </Switch>
    </React.Fragment>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
