import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

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
      setError({ title: "empty input", message: "imput sth" });
      return;
    }
    if (age < 1) {
      setError({ title: "invalid age", message: "should be >0" });
      return;
    }
    console.log(name, age);
    setName("");
    setAge("");
    props.onAddUser({ name: name, agee: age, key: Math.random().toString() });
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
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
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
