import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import axios from "axios";

export class App extends Component {
  // Define what props.theme will look like
  state = {
    users: [],
  };

  async componentDidMount() {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ users });
    // console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/* <MenuComponent /> */}
        {/* <Main /> */}
        <div style={{ marginTop: "4%" }} className="panel panel-primary">
          <style></style>
          <div>
            <h2 style={{ textAlign: "center" }} className="h4 mb-4">
              Liste des personnes
            </h2>
          </div>
          <div style={{ marginTop: "3%" }} className="panel-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>title</th>
                  <th>Delete</th>
                  <th>Détails</th>
                </tr>
              </thead>
              {this.state.users.map((user) => (
                <>
                  <tbody>
                    <tr>
                      <td>{user.title}</td>

                      <td>
                        <button className="btn btn-danger">Delete</button>&nbsp;
                        {/* <button className="btn btn-info">Modifier</button> */}
                      </td>

                      <td>
                        <button className="btn btn-info btn-block">
                          Détails
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
