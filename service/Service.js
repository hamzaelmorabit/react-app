import React, { useState, useEffect } from "react";
import http from "./HttpService";
import { ToastContainer, toast } from "react-toastify";
import * as Sentry from "@sentry/react";

import config from "../config.json";

const Service = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      const { data: users } = await http.get(config.apiEndPoint);
      console.log(users);

      setUsers(users);
    };

    fetchData();
  }, []);

  const handleAdd = async () => {
    const userAdded = { title: "USER ADDED", body: "22" };
    const { data: userAdd } = await http.post(config.apiEndPoint, userAdded);
    const _users = [userAdd, ...users];
    setUsers(_users);
  };

  const handleUpdate = async (post) => {
    post.title = "Update Title put";
    await http.put(config.apiEndPoint + "/" + post.id, post);

    const _users = [...users];
    const index = users.indexOf(post);
    _users[index] = { ...post };
    setUsers(_users);
  };

  const handleDelete = async (post) => {
    let usersOriginal = users;
    let _users = users.filter((user) => user.id !== post.id);
    setUsers(_users);

    try {
      await http.delete("mlkmk" + config.apiEndPoint + "/" + post.id);
      //   throw new Error("");
    } catch (e) {
      if (e.response && e.response.status == 404) {
        toast.error("Something worng, already deleted");
      } else {
        toast("An Unexpected error occured");
        Sentry.captureException(e);
      }
      setUsers(usersOriginal);
    }
  };
  return (
    <div className="test">
      <ToastContainer />
      <button className="btn btn-primary" onClick={handleAdd}>
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
            {users.map((user) => (
              <>
                <tbody>
                  <tr key={user.id}>
                    <td>{user.title}</td>

                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      &nbsp;
                      {/* <button className="btn btn-info">Modifier</button> */}
                    </td>

                    <td>
                      <button
                        onClick={() => handleUpdate(user)}
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
};

export default Service;
