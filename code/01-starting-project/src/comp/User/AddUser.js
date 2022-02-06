import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from '../UI/Card';

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
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="John" />
        <label htmlFor="lname">Age:</label>
        <input type="number" id="lname" name="lname" value="20" />
        <input type="submit" value="Submit"></input>
      </form>
    </Card>
  );
};

export default AddUser;
