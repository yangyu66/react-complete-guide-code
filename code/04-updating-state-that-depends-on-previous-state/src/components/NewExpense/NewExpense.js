import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const AddNewExpHandler = (expData) => {
    console.log("in newExp.js")
    const newData = {
      ...expData,
      id: Math.random().toString(),
    }
    console.log(newData)
    props.onNewExp(newData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onAddNewExp={AddNewExpHandler}/>
    </div>
  );
};

export default NewExpense;
