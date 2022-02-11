import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, refMount) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={refMount} {...props.input} />
    </div>
  );
});

export default Input;
