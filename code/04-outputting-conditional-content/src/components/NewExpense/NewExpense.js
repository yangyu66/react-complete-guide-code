import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [editing, setEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const onClickHandler = () => {
    setEditing(true)
  }

  const onCancelHandler = () => {
    setEditing(false)
  }

  return (
    <div className='new-expense'>
      {!editing && <button onClick={onClickHandler}>Add New Expense</button> }
       {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>}
      
    </div>
  );
};

export default NewExpense;
