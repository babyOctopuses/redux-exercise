import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { EditUser } from "./EditUser";

export default function UserList() {
  const users = useSelector((state) => state.users);
  const print = () => {
    console.log("users", users);
  };

  const navigate = useNavigate();
  const Adduser = () => {
    navigate("/add-user");
  };
  const EditUser = () => {
    navigate("/edit-user/");
  };
  useEffect(() => {
    print();
  });
  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load users</button>
        </div>
        <div className="two columns">
          <button className="button-primary" onClick={Adduser}>
            Add user
          </button>
        </div>
      </div>
      <div className="row">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, email }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button>Delete</button>
                  <button onClick={EditUser}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
