import React from "react";
import AddUser from "./comp/User/AddUser";
import UsersList from "./comp/User/UsersList";
import { useState } from "react";

function App() {
  const [userList, setuserList] = useState([]);
  const addUserHandler = (newUser) => {
    console.log("in app");
    console.log(newUser.name);
    // const newuserList = [...userList, newUser]
    // setuserList(newuserList)
    setuserList((prev) => {
      return [...prev, newUser];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={userList}></UsersList>
    </div>
  );
}

export default App;
