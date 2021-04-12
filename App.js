import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import Service from "./service/Service";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
// AIzaSyBaT82mWzKUf-sGhbW2Z2Ls_DS6m8MYvAE
const store = ConfigureStore();
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
