import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };
  const onSubmitHandler = (event) => {
    console.log("in submit");
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (age < 1) {
      return;
    }
    console.log(name, age);
    setName("");
    setAge("");
    props.onAddUser({ name: name, agee: age, key: Math.random().toString() });
  };

  return (
    <Card userClass={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
