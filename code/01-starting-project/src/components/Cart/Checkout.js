import { useRef, useState } from 'react';


import classes from './Checkout.module.css';

const isEmpty = (v) => {return v.trim() === ''}

const Checkout = (props) => {
    const nameRef = useRef()
    const [formValid, setFormValid] = useState({name: true})


    const confirmHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;

        const nameValid = !isEmpty(name);
        setFormValid({name: nameValid})
        const curFormValid = nameValid
        if (curFormValid) {
            console.log(name)
            // submit
            props.onOrderConfirm({name: name})
        }
        return
    }

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameRef}/>
            {!formValid.name && <p> invalid name</p> }
          </div>
          <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' />
          </div>
          <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' />
          </div>
          <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' />
          </div>
          <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
          </div>
        </form>
      );
}

export default Checkout