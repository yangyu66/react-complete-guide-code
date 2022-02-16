import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameValid, setEnteredNameValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameValid(false)
      return
    }

    setEnteredNameValid(true)

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
  };

  const inputClass = enteredNameValid ? "form-control" : "form-control invalid"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameValid && <p> Can'tt be empty!</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
