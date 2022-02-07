import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

/*
a function triggered automatically via calling dispacth
always takes two param(latest state snapshot, action type)
return new state
*/
const emailReducer = (state, action) => {
  if (action.mytype === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
    // return { value: state.value, isValid: state.value.includes("@") };
  }
  if (action.mytype === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "ca", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.mytype === "USER_INPUT") {
    return { value: action.val, isValid: state.value.trim().length > 6  };
    // return { value: state.value, isValid: state.value.includes("@") };
  }
  if (action.mytype === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailStat, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordStat, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  // empty list, evaluate once
  // useEffect(() => {
  //   console.log("test ---- running")
  // }, [])

  // empty, evaluate ALWAYS
  // useEffect(() => {
  //   console.log("test ---- running")
  // }, )

  // clean up function(in return) get called before evaluate,
  // so will cancel previous timer before set a new one

  const { isValid: mailValid } = emailStat;
  const { isValid: passValid } = passwordStat;
  useEffect(() => {
    const idx = setTimeout(() => {
      console.log("Checking");
      setFormIsValid(
        // emailStat.value.includes("@") && passwordStat.value.trim().length > 6
        mailValid && passValid
      );
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(idx);
    };
  }, [mailValid, passValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ mytype: "USER_INPUT", val: event.target.value });
    // setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   event.target.value.includes('@') && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ mytype: "USER_INPUT", val: event.target.value });
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ mytype: "INPUT_BLUR" });
    // setEmailIsValid(emailStat.value.includes("@"));
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ mytype: "INPUT_BLUR" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailStat.value, passwordStat.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailStat.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailStat.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordStat.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordStat.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
