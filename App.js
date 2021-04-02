import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import Service from "./service/Service";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/* <MenuComponent /> */}
        <Main />
        {/* <Service /> */}
        <Footer />
      </div>
    );
  }
}
