import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from '../UI/Card';
import Button from '../UI/Button';


const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmitHandler = (event) => {
    console.log("submit");
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <Card userClass={classes.input}>
      <form onSubmit={onSubmitHandler}>
      <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>

      </form>
    </Card>
  );
};

export default AddUser;
