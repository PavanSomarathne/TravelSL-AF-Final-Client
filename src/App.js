import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navBar/Navbar";
import Login from "./components/user/Login";
import Footer from "./components/navBar/Footer";
import Register from "./components/user/Register";
import Home from "./components/home/Home";
import Add from "./components/add/Add";
import Auth from "./Authentication/Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Navbar />
            <Login />
          </Route>
          <Route path="/register" exact>
            <Navbar />
            <Register />
          </Route>
          <Route path="/home" exact>
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route
            path="/logout"
            render={() => {
              Auth.logout();
              return (
                <div>
                  <Navbar />
                  <Home />
                  <Footer />
                </div>
              );
            }}
          />
          <Route path="/add" component={Add} exact>
            <Navbar />
            <Add />
          </Route>
          <Route path="*">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
