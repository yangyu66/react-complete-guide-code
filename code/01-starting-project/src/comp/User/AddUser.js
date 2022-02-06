import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from '../UI/Card';
import Button from '../UI/Button';


const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const ageChangeHandler = (event) => {
    console.log(event.target.value)
    setAge(event.target.value)
  }
  const onSubmitHandler = (event) => {
    console.log("submit");
    event.preventDefault();
    console.log(name, age);

  };

  return (
    <Card userClass={classes.input}>
      <form onSubmit={onSubmitHandler}>
      <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={nameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>

      </form>
    </Card>
  );
};

export default AddUser;
