import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

  const amountInputRef = useRef();
  const [valid, setV] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.amount_m1)
    console.log(amountInputRef.current)
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setV(false)
      return;
    }
    setV(true)

    props.onAddItem(enteredAmountNumber)


  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '50',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!valid && <p> Invalid input!</p> }
    </form>
  );
};

export default MealItemForm;
