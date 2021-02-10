import React, { Component } from "react";
import Auth from "../../Authentication/Auth";
import logo from "../../img/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };

    if (Auth.isAuthenticated()) {
      this.setState({ isLogged: true });
    }
  }

  render() {
    return (
      <div className="">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary p-1">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand m-0" href="home">
            <img
              src={logo}
              className="d-inline-block align-top m-1"
              width="120"
              height="50"
              alt="asd"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="nav navbar-nav m-0 float-right "></ul>
          </div>
          <div className="float-right">
            <ul className="nav navbar-nav float-right">
              <li className="nav-item ">
                <a className="nav-link" href="home">
                  Home{" "}
                </a>
              </li>

              <li className="nav-item ">
                <a
                  className="nav-link"
                  href={Auth.isAuthenticated() ? "/add" : "/home"}
                >
                  {Auth.isAuthenticated() ? "Manage Places" : ""}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={Auth.isAuthenticated() ? "/logout" : "/login"}
                >
                  {Auth.isAuthenticated() ? "Logout" : "Login/Register"}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />
      </div>
    );
  }
}

export default Navbar;
