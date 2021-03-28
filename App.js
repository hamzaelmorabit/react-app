import logo from "./logo.svg";
import React, { Component } from "react";

import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <p>hrefqsfqsjflqsdfmlqsdfj sdqfqjdslfjqsmljfqsd</p>{" "}
        <p>hrefqsfqsjflqsdfmlqsdfj sdqfqjdslfjqsmljfqsd</p>
      </div>
    );
  }
}
