import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import axios from "axios";
const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

export class App extends Component {
  // Define what props.theme will look like

  state = {
    users: [],
  };

  async componentDidMount() {
    const { data: users } = await axios.get(apiEndPoint);
    this.setState({ users });
    // console.log(data);
  }

  handleAdd = async () => {
    const userAdded = { title: "USER ADDED", body: "22" };
    const { data: userAdd } = await axios.post(apiEndPoint, userAdded);
    const users = [userAdd, ...this.state.users];
    this.setState({ users });
  };
  handleUpdate = async (post) => {
    post.title = "Update Title put";
    await axios.put(apiEndPoint + "/" + post.id, post);

    const users = [...this.state.users];
    const index = users.indexOf(post);
    users[index] = { ...post };
    this.setState({ users });
  };

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
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
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
                  <th>Update</th>
                </tr>
              </thead>
              {this.state.users.map((user) => (
                <>
                  <tbody>
                    <tr key={user.id}>
                      <td>{user.title}</td>

                      <td>
                        <button className="btn btn-danger">Delete</button>&nbsp;
                        {/* <button className="btn btn-info">Modifier</button> */}
                      </td>

                      <td>
                        <button
                          onClick={() => this.handleUpdate(user)}
                          className="btn btn-info btn-block"
                        >
                          Update
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
