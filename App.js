import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import Service from "./service/Service";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar> */}
          {/* <MenuComponent /> */}
          <Main />
          {/* <Service /> */}
        </div>
      </BrowserRouter>
    );
  }
}
